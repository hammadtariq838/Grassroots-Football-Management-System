import { Button } from "@/components/ui/button"
import { AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Navbar"
import { useParams } from "react-router-dom"
import { useGetGameByIdQuery } from "@/services/gameApiSlice"
import Footer from "@/components/Footer"
import { useAppSelector } from "@/app/hooks"

function GameChannelScreen() {
  // get id from route params
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetGameByIdQuery(id!)
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="flex h-screen max-h-screen w-full flex-col">
        <Navbar />
        {
          isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <p>Loading...</p>
            </div>
          ) : (

            <div className="flex h-full px-20 bg-gray-100">
              <div className="border-r border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-900 w-80">
                <div className="flex flex-col items-start rounded-md bg-white p-3 shadow-sm dark:bg-gray-800 ">
                  <h2 className="text-2xl font-bold">Game Details</h2>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{user?.user.team?.name}</h2>
                    <span>vs</span>
                    <h2 className="text-lg font-semibold">{data?.game.teams[0].name}</h2>
                    <p className="text-center">({new Date(data?.game.dateTime || "").toLocaleDateString()})</p>
                  </div>

                  <h3 className="text-lg font-semibold mt-4">Our Team</h3>
                  <ul className="space-y-2">
                    {user?.user.team?.players.map((player) => (
                      <li key={player}>{player}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mt-4">Opponent Team</h3>
                  <ul className="space-y-2">
                    {data?.game.teams[0].players.map((player) => (
                      <li key={player}>{player}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 bg-gray-100 p-4 dark:bg-gray-900">
                <h2 className="text-2xl font-bold">Game Chat</h2>
                <div className="h-[calc(100%-150px)] overflow-y-auto rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>CS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="rounded-md bg-gray-100 p-3 text-sm dark:bg-gray-700">
                          <p>Hey there! Just wanted to check in about the upcoming game.</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 space-y-2">
                        <div className="rounded-md bg-blue-500 p-3 text-sm text-white">
                          <p>Sure, I'm available to discuss the game plan. What time works best for you?</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10:32 AM</p>
                      </div>
                      <Avatar>
                        <AvatarFallback>YO</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>CS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="rounded-md bg-gray-100 p-3 text-sm dark:bg-gray-700">
                          <p>How about 2 PM today? I can share my screen and we can go over the game plan.</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10:34 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 space-y-2">
                        <div className="rounded-md bg-blue-500 p-3 text-sm text-white">
                          <p>Sounds good, I'll be there. Looking forward to it!</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">10:35 AM</p>
                      </div>
                      <Avatar>
                        <AvatarFallback>YO</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Textarea className="flex-1 resize-none" placeholder="Type your message..." />
                  <Button>Send</Button>
                </div>
              </div>
            </div>
          )
        }
        <Footer />
      </div>
    </>
  )
}

export default GameChannelScreen

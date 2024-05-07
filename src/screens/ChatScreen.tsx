import { Button } from "@/components/ui/button"
import { AvatarFallback, Avatar } from "@/components/ui/avatar"
import { MessageSquareIcon, SearchIcon } from "lucide-react"
import Navbar from "@/components/Navbar"
import { Link } from "react-router-dom"

function ChatScreen() {
  return (
    <>
      <div className="flex h-screen max-h-screen w-full flex-col">
        <Navbar />
        <div className="flex h-full px-20 bg-gray-100">
          <div className="border-r border-gray-200 p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Coaches</h2>
              <Button size="icon" variant="ghost">
                <SearchIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2">
              <Link to='/chat/1' className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">Coach Smith</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MessageSquareIcon className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>CJ</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">Coach Johnson</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MessageSquareIcon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">Coach Davis</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MessageSquareIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 p-6 ">
            <div className="flex items-center justify-center grow bg-white h-full rounded">
              <p className="text-lg font-semibold text-center">Select a coach to start a conversation</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatScreen

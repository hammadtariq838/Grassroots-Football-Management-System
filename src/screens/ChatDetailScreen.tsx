import { Button } from "@/components/ui/button"
import { AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquareIcon, SearchIcon } from "lucide-react"
import Navbar from "@/components/Navbar"

function ChatDetailScreen() {
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
              <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">Coach Smith</p>
                </div>
                <Button size="icon" variant="ghost">
                  <MessageSquareIcon className="h-5 w-5" />
                </Button>
              </div>
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
          <div className="flex-1 bg-gray-100 p-4 dark:bg-gray-900">
            <h2 className="text-lg font-semibold mb-2">Conversation with Coach Smith</h2>
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
      </div>
    </>
  )
}

export default ChatDetailScreen

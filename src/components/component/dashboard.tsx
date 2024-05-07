import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

export function Dashboard() {
  return (
    <main className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FlagIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Grassroots Football</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[300px_1fr] gap-6 p-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">My Teams</h2>
            <Button size="sm">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Team
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-md p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">FC Grassroots</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Coach: John Doe</p>
                </div>
              </div>
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-md p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Strikers Club</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Coach: Jane Smith</p>
                </div>
              </div>
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Upcoming Matches</h2>
            <Button size="sm">
              <PlusIcon className="h-4 w-4 mr-2" />
              Schedule Match
            </Button>
          </div>
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-900 rounded-md p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>FC</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">FC Grassroots</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">vs</p>
                <div className="flex items-center gap-3">
                  <p className="font-medium">Strikers Club</p>
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">May 20, 2023 - 4:00 PM</p>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-md p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>FC</AvatarFallback>
                  </Avatar>
                  <p className="font-medium">FC Grassroots</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">vs</p>
                <div className="flex items-center gap-3">
                  <p className="font-medium">Strikers Club</p>
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">June 10, 2023 - 2:00 PM</p>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <p className="text-sm">© 2023 Grassroots Football. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="text-sm hover:underline" to="#">
            Privacy Policy
          </Link>
          <Link className="text-sm hover:underline" to="#">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

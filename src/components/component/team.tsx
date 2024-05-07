import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function Team() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <Link to="#">
            <FlagIcon className="h-8 w-8 text-green-500" />
          </Link>
          <h1 className="text-xl font-semibold">Grassroots Football</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost">
            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height={32}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Jared Palmer</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-[280px_1fr] h-full">
          <div className="border-r bg-gray-100/40 dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <h2 className="text-lg font-semibold">Teams</h2>
                <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Add team</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid gap-1 px-4">
                  <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                    to="#"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Team A" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>TA</AvatarFallback>
                    </Avatar>
                    <span>Team A</span>
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                    to="#"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Team B" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>TB</AvatarFallback>
                    </Avatar>
                    <span>Team B</span>
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                    to="#"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Team C" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <span>Team C</span>
                  </Link>
                </nav>
              </div>
              <div className="mt-auto p-4">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" size="sm">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex h-[60px] items-center border-b bg-gray-100/40 px-6 dark:border-gray-800 dark:bg-gray-800/40">
              <h2 className="text-lg font-semibold">Team A</h2>
              <div className="ml-auto flex items-center gap-4">
                <Button size="sm" variant="outline">
                  Manage Players
                </Button>
                <Button size="sm" variant="outline">
                  Schedule Games
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-[40px_1fr] items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage alt="Player 1" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>P1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Forward</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                    </Button>
                    <Button className="text-red-500" size="icon" variant="outline">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage alt="Player 2" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>P2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Midfielder</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                    </Button>
                    <Button className="text-red-500" size="icon" variant="outline">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage alt="Player 3" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>P3</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Defender</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                    </Button>
                    <Button className="text-red-500" size="icon" variant="outline">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage alt="Player 4" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>P4</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Emily Davis</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Goalkeeper</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                    </Button>
                    <Button className="text-red-500" size="icon" variant="outline">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t bg-gray-100/40 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              <MessageCircleIcon className="mr-2 h-4 w-4" />
              Message
            </Button>
            <Button size="sm" variant="outline">
              <CalendarDaysIcon className="mr-2 h-4 w-4" />
              Schedule
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              <UsersIcon className="mr-2 h-4 w-4" />
              Manage Team
            </Button>
            <Button size="sm" variant="outline">
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DeleteIcon(props: any) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
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
function MessageCircleIcon(props: any) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TrashIcon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

import { Button, buttonVariants } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarFallback, Avatar } from "@/components/ui/avatar"
import { MessageCircleIcon, MessageSquareIcon, TrashIcon, XIcon } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Link } from "react-router-dom"

function DashboardScreen() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>Coaches can add or remove players to/from their team rosters.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium leading-none">John Doe</p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium leading-none">Sarah Miller</p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full" variant="outline">
                    Add Player
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Game Scheduling</CardTitle>
                <CardDescription>Coaches can create, edit, and view game schedules.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium leading-none">vs. Acme FC</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">May 15, 2023 - 7:00 PM</p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium leading-none">vs. Dynamo FC</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">June 1, 2023 - 3:00 PM</p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full" variant="outline">
                    Create Game
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Link to='/chat'>
              <Card>
                <CardHeader>
                  <CardTitle>Direct Messaging</CardTitle>
                  <CardDescription>Secure communication between coaches.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>JB</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">John Bauer</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Coach</p>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost">
                        <MessageCircleIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>LM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">Lisa Mayer</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Coach</p>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost">
                        <MessageCircleIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button className="w-full" variant="outline">
                      New Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <div className="fixed bottom-20 right-8">
        <Link to='/chat' className={buttonVariants({ size: 'icon' })}>
          <MessageSquareIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}

export default DashboardScreen

import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export function Manage() {
  return (
    <main className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <GoalIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Grassroots Friendlies</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:underline" to="#">
            Coaches
          </Link>
          <Link className="hover:underline" to="#">
            Teams
          </Link>
          <Link className="hover:underline" to="#">
            Matches
          </Link>
          <Button variant="outline">Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-3 gap-6 p-8">
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Manage Your Team</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Players</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Player Name" />
                  <Input placeholder="Player Email" type="email" />
                  <Button className="w-full">Add Player</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Create Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Opponent Team" />
                  <Input placeholder="Match Date" type="date" />
                  <Button className="w-full">Schedule Match</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Secure Communication</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Direct Messaging</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Recipient Email" />
                  <Textarea placeholder="Message" />
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Match Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link className="flex items-center justify-between hover:bg-gray-100 px-4 py-2 rounded" to="#">
                    <div>
                      <h3 className="font-medium">Acme FC vs. Apex United</h3>
                      <p className="text-gray-500 text-sm">May 15, 2023 - 7:00 PM</p>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                  </Link>
                  <Link className="flex items-center justify-between hover:bg-gray-100 px-4 py-2 rounded" to="#">
                    <div>
                      <h3 className="font-medium">Dynamo City vs. Riverside Rovers</h3>
                      <p className="text-gray-500 text-sm">May 22, 2023 - 3:00 PM</p>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-4 px-6 text-center">
        <p>© 2023 Grassroots Friendlies. All rights reserved.</p>
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
function GoalIcon(props: any) {
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
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </svg>
  )
}

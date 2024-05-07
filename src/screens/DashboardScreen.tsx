import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarFallback, Avatar } from "@/components/ui/avatar"
import { TrashIcon } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { setCredentials } from "@/features/auth/authSlice"
import { toast } from "sonner"
import { useSetTeamMutation } from "@/services/userApiSlice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"


const TeamFormSchema = z.object({
  name: z.string().min(3),
  players: z.array(z.object({
    name: z.string().min(3),
  })),
});

type TeamForm = z.infer<typeof TeamFormSchema>;

function DashboardScreen() {
  const dispatch = useAppDispatch();
  const [setTeamApi, { isLoading }] = useSetTeamMutation();

  const { user } = useAppSelector((state) => state.auth);

  const form = useForm<TeamForm>({
    resolver: zodResolver(TeamFormSchema),
    defaultValues: {
      name: user?.user.team?.name || '',
      players: user?.user.team?.players.map((player) => ({ name: player })) || [{ name: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'players',
  });

  const onSubmit = async (data: TeamForm) => {
    console.log(data);
    try {
      const res = await setTeamApi({
        name: data.name,
        players: data.players.map((player) => player.name),
      }).unwrap();
      console.log('set team', res);
      dispatch(setCredentials({ ...res }));
      toast.success('Successfully updated team!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.error?.message || err?.data?.message || err.error);
      console.log(err);
    }
  }

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
                  {
                    user?.user.team ? (
                      user?.user.team.players.map((player, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback>
                              {player.split(' ').filter((_, i) => i < 2).map((name) => name[0].toUpperCase()).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-medium leading-none">{player}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm font-medium leading-none">No players in your team yet.</p>
                    )
                  }
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="outline">
                        Manage Team
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[450]">
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                          <DialogTitle>Manage Team</DialogTitle>
                          <DialogDescription>
                            Make changes to your team here. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid  items-center gap-4">
                            <Label htmlFor="name">
                              Team Name
                            </Label>
                            <Input
                              id="name"
                              defaultValue="Pedro Duarte"
                              className="col-span-3"
                              {...form.register('name')}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Players</Label>
                            <Button
                              type="button"
                              variant='secondary'
                              onClick={() => append({ name: '' })}
                            >
                              Add Player
                            </Button>
                          </div>

                          <div className="grid gap-2">
                            {fields.map((_, index) => (
                              <div key={index} className="flex gap-2">
                                <Input placeholder="Jim Hill" {...form.register(`players.${index}.name`)} />
                                <Button size="icon" variant="destructive"
                                  type="button" onClick={() => remove(index)}
                                >
                                  <TrashIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                        <DialogFooter className="sm:justify-center">
                          <DialogClose asChild>
                            <Button type="submit"
                              disabled={isLoading}
                            >Save changes</Button>
                          </DialogClose>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DashboardScreen

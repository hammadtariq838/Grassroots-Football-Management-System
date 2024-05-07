import { GoalIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 px-6 text-white">
      <div className="flex items-center gap-4 justify-center">
        <GoalIcon className="h-6 w-6" />
        <p>© 2023 Grassroots Football. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'
import { Toaster } from './components/ui/sonner'

const App = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
            <Toaster position="top-center" richColors />
        </>
    )
}

export default App

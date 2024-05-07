import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <div className='grid place-items-center gap-2'>
                <h1 className='text-2xl font-bold'>Welcome!</h1>
                <p className='text-lg'>Grassroots Football Management System</p>
            </div>
            <Link to="/dashboard" className={buttonVariants()}>
                Go to dashboard
            </Link>
        </div>
    )
}

export default HomeScreen

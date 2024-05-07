import { buttonVariants } from '@/components/ui/button'
import styles from '@/css/home.module.css'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className="flex flex-col">
            <div className={cn(styles.container, 'flex flex-col')}>
                <div className={styles.header}>
                    <h1>Welcome!</h1>
                    <p>grassroots football management system</p>
                </div>
                <Link to="/dashboard" className={buttonVariants()}>
                    Go to dashboard
                </Link>
            </div>
        </div>
    )
}

export default HomeScreen

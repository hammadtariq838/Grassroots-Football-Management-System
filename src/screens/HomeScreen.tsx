import { buttonVariants } from '@/components/ui/button'
import styles from '@/css/home.module.css'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className="flex flex-col">
            <div className={cn(styles.container, 'flex flex-col')}>
                <div className={styles.header}>
                    <h1>Welcome to our Restaurant</h1>
                    <p>
                        Order delicious food online or manage orders as an
                        employee
                    </p>
                </div>
                <Link to="/menu" className={buttonVariants()}>
                    Go to menu
                </Link>
            </div>
        </div>
    )
}

export default HomeScreen

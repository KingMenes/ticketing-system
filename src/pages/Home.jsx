// import components
import TicketGraphs from '../component/TicketGraphs.tsx';
import TicketTable from '../component/TicketTable';
import { motion } from 'framer-motion'

function Home() {
    return (
        <div className='flex flex-col w-3/4'>
            <motion.div
                initial={{
                    opacity: 0,
                    // y: -300,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    // y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}>
                <TicketGraphs />
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    // y: -300,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    // y: 0,
                    scale: 1,
                }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                }}>
                <TicketTable heading='Open Tickets' />
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    // y: -300,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    // y: 0,
                    scale: 1,
                }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                }}>
                <TicketTable heading='Resolved Tickets' />
            </motion.div>
        </div>
    )
}

export default Home
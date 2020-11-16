import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const ContactMe = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background: '#fff'}}>
            <h1>Contact me</h1>
        </motion.div>
    )
}

export default ContactMe
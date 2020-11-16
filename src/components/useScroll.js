import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'
import {fade} from '../animation'

export const useScroll = () => {
    const controls = useAnimation()
    const [element, view] = useInView({ threshold: 0.3 }) //halfway through the section is true
    if(view){
        controls.start('show')
    } else {
        controls.start('hidden')
    }
    return [element, controls]
}
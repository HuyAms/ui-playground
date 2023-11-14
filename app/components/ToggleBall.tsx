import React from 'react'
import {motion} from 'framer-motion'

export function ToggleBall() {

    const [isEnabled, setEnabled] = React.useState(false)

    return (
       <div>
         <motion.div 
            className='h-[100px] w-[100px] bg-red-400 rounded-full'
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 25
            }}
            animate={{
                y: isEnabled ? -60 : 0
            }}
         />
         <button className='p-4 bg-slate-300' onClick={() => setEnabled(!isEnabled)}>Toggle</button>
       </div>
    )
}
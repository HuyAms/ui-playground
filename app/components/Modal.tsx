
/*
  NOTE: This is NOT a very robust modal implementation.
  Please use something like Reach UI! This is a quick and
  dirty implementation to show the animation concept.
*/


import React from 'react'
import { H2 } from './Typography'
import clsx from 'clsx'

type Props = {
    handleDismiss: () => void,
    children: React.ReactNode,
    title: string
    isOpen: boolean
}

// Animation idea
// The backdrop starts fading in right away, and lasts a long time (1000ms).
// The modal waits for 250ms, and then slides in over 400ms
// The close button is now hidden by default, and is given its own unique transition. It starts animating after 600ms, and lasts 250ms.

function getModalStyles(isOpen: boolean) {
    return {
        backdropStyles: {
            transition: 'opacity',
            transitionDuration: isOpen ? '1000ms' : '500ms',
            transitionTimingFunction: isOpen ? 'ease-out' : 'ease-in',
            transitionDelay: isOpen ? '0' : '250ms',
        },

        modalStyles: {
            transition: 'transform',
            transitionDelay: isOpen ? '200ms' : '0',
            transitionDuration: isOpen ? '400ms' : '250ms',
            transitionTimingFunction: isOpen ? 'ease-out' : 'ease-in'
        },

        closeButtonStyles: {
            transition: 'opacity, transform',
            transitionDelay: isOpen ? '600ms' : '0',
            transitionDuration: isOpen ? '250ms' : '250ms',
            transitionTimingFunction: isOpen ? 'ease-out' : 'ease-in'
        },
    }
}

function Modal({title, handleDismiss, children, isOpen}: Props) {

    const {backdropStyles,
        modalStyles,
        closeButtonStyles} = getModalStyles(isOpen)

    return (
        <div className={clsx(
            'fixed inset-0',
            {"pointer-events-none": !isOpen}
        )}>
            <div style={{
                ...backdropStyles,
                opacity: isOpen ? 0.75 : 0
            }} className='absolute inset-0 bg-black'></div>
            <div style={{
                ...modalStyles,
                transform: isOpen ? 'translateY(0)' :  'translateY(100vh)'
            }} className='absolute inset-0 bg-white p-8 w-[80%] h-[60%] m-auto rounded-lg'>
                <H2>{title}</H2>
                <button onClick={handleDismiss} className='text-white absolute right-0 -top-9 text-xl' style={{
                    ...closeButtonStyles,
                    transform: isOpen ? 'translateY(0)' : 'translateY(25%)',
                    opacity: isOpen ? 1 : 0
                }}>Close</button>
                {children}
                </div>
        </div>
    )
}

export function ModalScreen() {

    const [isOpen, setIsOpen] = React.useState(true)


    React.useEffect(() => {

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <div>
            <button className='p-4 bg-slate-300' onClick={() => setIsOpen(!isOpen)}>Toggle Modal</button>
            <Modal title="Example Modal" isOpen={isOpen}  handleDismiss={() => setIsOpen(false)}>This is a modal</Modal>
        </div>
    )
}
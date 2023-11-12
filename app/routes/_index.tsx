import React from 'react'
import { Container } from "~/components/Container";
import { HelpCircle } from '~/components/HelpCircle';
import { H2, H3, Paragraph } from "~/components/Typography";

const intialValues = {
    translateX: 0,
    translateY: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
}

export default function AnimationPage() {

    const [translateX, setTranslateX] = React.useState(intialValues.translateX)
    const [translateY, setTranslateY] = React.useState(intialValues.translateY)
    const [scale, setScale] = React.useState(intialValues.scale)
    const [rotate, setRotate] = React.useState(intialValues.rotate)
    const [skewX, setSkewX] = React.useState(intialValues.skewX)
    const [skewY, setSkewY] = React.useState(intialValues.skewY)

    function reset() {
        const {translateX, translateY, scale, rotate, skewX, skewY} = intialValues
        setTranslateX(translateX)
        setTranslateY(translateY)
        setScale(scale)
        setRotate(rotate)
        setSkewX(skewX)
        setSkewY(skewY)
    }

    return (
        <Container>
            <section>
                <H2>Transforms</H2>
                <div className=" bg-red-100 p-5">
                        <div className="bg-white relative flex justify-center items-center h-[200px] mb-5">
                            <div className="relative h-[100px] w-[100px]">
                                <div className="absolute inset-0 border-dashed border-4 border-black"></div>
                                <div style={{
                                    transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg) scale(${scale}) rotate(${rotate}deg)`
                                }} className="bg-blue-800/50 absolute inset-0 ease-linear duration-300 transition-all"></div>
                            </div>
                        </div>
                        <div>
                            <button onClick={reset} className="mb-4">Reset</button>
                            <div className="mb-4">
                                <Paragraph className="mb-3">translate: ({translateX}px, {translateY}px)</Paragraph>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="translate-x">x</label>
                                    <input id="translation-x" value={translateX} onChange={(e) => setTranslateX(Number(e.target.value))} type="range" min="-100" max="100" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="translate-y">y</label>
                                    <input id="translation-y" value={translateY} onChange={(e) => setTranslateY(Number(e.target.value))} type="range" min="-100" max="100" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <Paragraph className="mb-3">scale: {scale}</Paragraph>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="scale">scale</label>
                                    <input id="scale" value={scale} onChange={(e) => setScale(Number(e.target.value))} type="range" min="0" max="3" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <Paragraph className="mb-3">rotate: {rotate}deg</Paragraph>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="rotate">rotate</label>
                                    <input id="rotate" value={rotate} onChange={(e) => setRotate(Number(e.target.value))} type="range" min="-360" max="360" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <Paragraph className="mb-3">skew: ({skewX}deg, {skewY}deg)</Paragraph>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="skew-x">x</label>
                                    <input id="skew-x" value={skewX} onChange={(e) => setSkewX(Number(e.target.value))} type="range" min="-45" max="45" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="skew-y">y</label>
                                    <input id="skew-y" value={skewY} onChange={(e) => setSkewY(Number(e.target.value))} type="range" min="-45" max="45" />
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <section>
                <H2>Orbit</H2>
                <Paragraph>The transform function are applied from right to left, here it applies translate first then rotate</Paragraph>
                <div className='bg-green-700 flex justify-center items-center h-[200px]'>  
                    <div className='relative'>
                    <div className="plenet h-[100px] w-[100px] bg-blue-800/50 rounded-full"></div>
                    <div className="moon absolute inset-0 m-auto h-[30px] w-[30px] bg-red-800/50 rounded-full"></div>   
                    </div>
                </div>
            </section>
            <section>
                <H2>Translated card - Transition</H2>
                <Paragraph>No doom flicker</Paragraph>
                <div className='bg-red-100 flex justify-center items-center h-[300px] gap-4'>  
                    <div className='group'>
                        <div className='w-[200px] h-[200px] rounded bg-white group-hover:-translate-y-[16px] transition-transform ease-linear duration-200'></div>
                    </div>
                    <div className='group'>
                        <div className='w-[200px] h-[200px] rounded bg-white group-hover:-translate-y-[16px] transition-transform ease-linear duration-200'></div>
                    </div>
                    <div className='group'>
                        <div className='w-[200px] h-[200px] rounded bg-white group-hover:-translate-y-[16px] transition-transform ease-linear duration-200'></div>
                    </div>
                    <div className='group'>
                        <div className='w-[200px] h-[200px] rounded bg-white group-hover:-translate-y-[16px] transition-transform ease-linear duration-200'></div>
                    </div>
                </div>
            </section>
            <section>
                <H2>Photo zoom</H2>
                <div className='bg-red-100 grid grid-cols-3 gap-4'>  
                   <div className='group overflow-hidden'>
                    <img className='group-hover:scale-125 ease-linear duration-500' src="https://placehold.co/600x400" alt="" />
                   </div>
                   <div className='group overflow-hidden'>
                    <img className='group-hover:scale-125 ease-linear duration-500' src="https://placehold.co/600x400" alt="" />
                   </div>
                   <div className='group overflow-hidden'>
                    <img className='group-hover:scale-125 ease-linear duration-500' src="https://placehold.co/600x400" alt="" />
                   </div>
                   <div className='group overflow-hidden'>
                    <img className='group-hover:scale-125 ease-linear duration-500' src="https://placehold.co/600x400" alt="" />
                   </div>
                   <div className='group overflow-hidden'>
                    <img className='group-hover:scale-125 ease-linear duration-500' src="https://placehold.co/600x400" alt="" />
                   </div>
                </div>
            </section>
            <section>
                <H2>Keyframe animations</H2>
                <Paragraph>Refersh the page to see the animation</Paragraph>
                <div className='mb-6'>
                    <H3>Slide-in</H3>
                    <div className='bg-red-950/50 slide-in h-[100px] w-[100px]'></div>
                </div>
                <div className='mb-6'>
                    <H3>Drop-in</H3>
                    <div className='bg-red-950/50 drop-in h-[100px] w-[100px]'></div>
                </div>
                <div className='mb-6'>
                    <H3>Grow and shrink</H3>
                    <div className='bg-red-950/50 grow-and-shrink h-[100px] w-[100px]'></div>
                </div>
            </section>
            <section>
                    <HelpCircle/>
            </section>
            <section>
                  <H3>Wave hand</H3>
                  <span className="wave">👋</span>
            </section>
        </Container>
    )
}
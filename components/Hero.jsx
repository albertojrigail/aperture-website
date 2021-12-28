import Image from "next/image"
import { useEffect, useState } from "react"

const mottos = [
    "A Trusted Friend in Science.",
    "Not Never But NOW.",
    "Courage is Not the Absence of Fear.",
    "There's a hole in the sky through which things can fly.",
    "We do what we must, because we can.",
    "A clear picture of the future.",
    "A clear focus on the future."
]

function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(
                index === mottos.length - 1 ? 0 : index + 1
            )
        }, 1000 * 10 ) // the amount of seconds multiplied by 1000 (miliseconds)

        return () => {
            clearInterval(timer)
        }
    }, [index, setIndex])

    return (
        <div className="flex flex-col justify-center items-center sm:p-12 m d:pl-32 md:pr-32 p-8 h-screen top-0">
            <Image 
                src="/logo.png"
                width={130}
                height={130}
                alt="logo"
                className="rounded-full"
            />

            <h1 className="text-5xl sm:text-7xl max-w-3xl m-8 font-bold text-center">
                <span className="hero-gradient-heading">Aperture Science.<br/></span>{mottos[index]}
            </h1>
            <p className="text-center max-w-3xl text-xl mb-4 font-medium text-[#0082C4]">
                We are Aperture. The world's leading company, engineering products from the far future, now. Aperture's mission is to deliver high-quality products to the humanity, because we can.
            </p>
        </div>
    )
}

export default Hero

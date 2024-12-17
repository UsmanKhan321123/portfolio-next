import Button from "./button";
import Image from "next/image";
function Hero(){
    return (
        <main className="flex">

                <div className="w-[50vw] p-[50px] ">
                    <h1 className="text-4xl font-bold font-sans my-[60px] animate-pulse">Muhammad Usman Khan !</h1>
                    <p className="my-[60px]">Welcome to my portfolio! I am a Web developer with a passion for building sleek, functional websites. I enjoy turning ideas into reality through coding and design, and I'm always eager to learn and grow in the ever-evolving tech landscape.</p>
                    <Button />
                </div>
                <div className="w-[50vw] py-[50px]">

            <Image src="/images/mypic.jpg" alt="web development" width="300" height="100" className="rounded-full mx-[150px]"></Image>
                </div>
        </main>
    )
}
export default Hero;

import Button from "@/components/button"
import Image from "next/image"

function About(){
    return(
        <div>

        <div className="flex ">
        <div className="w-[50vw] p-[50px] ">
                    <h1 className="text-4xl font-bold font-sans mt-[50px] animate-pulse">About Us</h1>
                    <p className="my-[30px]">I specialize in empowering businesses through innovative digital solutions. With a focus on digital marketing, website development, eCommerce, and mobile application development, I tailor my services to meet the unique needs of each client. I combine creativity and technical expertise to drive growth and enhance online presence. I believe in forging lasting partnerships, ensuring that my clients not only succeed but thrive in the digital landscape. From startups to established enterprises, I am dedicated to delivering high-quality, results-driven services that help you achieve your business goals. Lets transform your vision into reality!</p>
                    <Button />
                </div>
                <div className="w-[50vw] p-[50px]  ">

            <Image src="/images/ai-generated-8131432_1280.png" alt="web development" width="500" height="200" className="rounded-full "></Image>
                    
                </div>

        </div>
        </div>
    )
}
export default About
import Link from "next/link"

function Footer(){
    const date = new Date().getFullYear() 
return(
    

    <div className="h-[50px] px-[50px] bg-lime-500 relative mt-[3.3%]">
            <div className="container flex justify-between py-[10px]">
                <Link href="https://www.linkedin.com/in/usman--khan/" className="h-[30px] w-[30px] rounded-full bg-[url('/images/linkedin.png')] bg-cover bg-white"></Link>
                <p className=" text-center">&copy; {date} Your Company Name. All rights reserved.</p>
                <Link href="https://github.com/UsmanKhan321123" className=" h-[30px] w-[30px] rounded-full bg-[url('/images/github2.png')] bg-cover bg-white"></Link>
            </div>
            </div>


)
}
export default Footer
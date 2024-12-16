import Link from "next/link"

function Navbar(){
    return(
        
        <main className="flex px-[40px] py-[10px] justify-between h-[80px]  custom-clip">
            <div className="mt-[20px] font-bold text-2xl text-black hover:text-white duration-300">Portfolio.</div>
            <div className="flex gap-11">
                <Link href="/" className="py-[17px] hover:text-white duration-300">Home</Link>
                <Link href="../about" className="py-[17px]  hover:text-white duration-300">About</Link>
                <Link href="../services" className="py-[17px]  hover:text-white duration-300">Services</Link>
                
                <Link href="../contact" className="py-[17px]  hover:text-white duration-300">Contact</Link>
                

            </div>

        </main>
    )
}
export default Navbar
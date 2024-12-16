import Navbar from "@/components/navbar"
import Image from "next/image"

function Services(){
    return(<>       
    
     <main className="flex flex-col mx-[40px]">

        <div className="flex h-[60vh]">
            <Image src="/images/webDev.jpg" alt="web development" width="500" height="600" ></Image>
            <div className="w-[50vw] h-[60vh]">
                <h1 className="text-3xl my-[60px] px-[40px] animate-pulse">Website Designing and Development</h1>
                <p className="px-[40px] ">I specialize in creating stunning and functional websites tailored to your needs. I focuses on responsive design, ensuring your site looks great on any device. I utilize the latest technologies to develop robust web solutions, from simple landing pages to complex eCommerce platforms. With an emphasis on user experience and SEO-friendly design, I help boost your online visibility and engage your audience. Let me bring your vision to life with a website that elevates your brand.</p>
            </div>
        </div>
            

        <div className="flex h-[60vh]">
            <div className="w-[50vw] h-[60vh]">
                <h1 className="text-3xl my-[60px] px-[40px] animate-pulse">Mobile Application Development</h1>
                <p className="px-[40px] ">I create innovative and user-friendly mobile applications that enhance your brand's presence on mobile devices. I am specialized in developing custom solutions for both iOS and Android platforms, ensuring a seamless experience for your users. I focus on intuitive design and robust functionality, tailoring each app to meet your unique business needs. With agile development process, I deliver high-quality apps on time and within budget. Partner with me to transform your ideas into engaging mobile experiences that drive user engagement and loyalty.</p>
            </div>
            <Image src="/images/mobileAppDev.jpg" alt="web development" width="500" height="600" ></Image>
            
        </div>

 <div className="flex h-[60vh]">
 <Image src="/images/E-commerce.jpg" alt="E-commerce.jpg" width="500" height="600" ></Image>
            
            <div className="w-[50vw] h-[60vh]">
                <h1 className="text-3xl my-[60px] px-[40px] animate-pulse">E-Commerce </h1>
                <p className="px-[40px] ">I specialize in eCommerce development across leading platforms like Shopify, Daraz, eBay, and Amazon. I am dedicated to building online stores that are visually appealing, user-friendly, and optimized for conversions. I understand the unique features and requirements of each platform, ensuring a seamless setup and integration for your business. From product listing to payment processing, I provide end-to-end solutions that enhance your online presence and drive sales. Let me help you unlock the full potential of your eCommerce venture and connect with customers around the globe.</p>

            </div>
        </div>
       
        <div className="flex h-[60vh]">
            <div className="w-[50vw] h-[60vh]">
                <h1 className="text-3xl my-[60px] px-[40px] animate-pulse">Digital Marketing</h1>
                <p className="px-[40px] ">I offer comprehensive digital marketing services designed to elevate your brand and drive measurable results. I am specialized in  social media marketing, content creation, and paid advertising to ensure your business reaches its target audience effectively. I leverage data-driven strategies to boost online visibility, engage customers, and increase conversions. Whether you're looking to build brand awareness or enhance customer loyalty, My tailored campaigns are crafted to meet your unique goals. Partner with me to navigate the digital landscape and achieve sustainable growth for your business.</p>
            </div>
            <Image src="/images/digitalMarketing.jpg" alt="web development" width="500" height="600" className="mt-10 "></Image>
            
        </div>

        </main>
        </>

    )
}
export default Services
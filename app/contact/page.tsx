import Image from "next/image";
function Contact() {
    return (
      <div className="flex">
        <div className="w-[50vw] px-[50px] my-[50px] focus:bg-lime-200">
          <h1 className="text-4xl mb-5 font-bold animate-pulse">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="border p-2 w-full rounded-xl focus:bg-lime-200"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your E-mail"
                className="border p-2 w-full rounded-xl focus:bg-lime-200"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">Message:</label>
              <textarea
                id="message"
                className="border p-2 w-full focus:bg-lime-200"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-[130px] h-[40px] p-[5px] text-center bg-lime-500 rounded-md hover:bg-gray-300 hover:text-lime-500 ">Send</button>
          </form>
        </div>
        <div className="w-[50vw]">
            <Image src="/images/20943953.jpg" alt="contact" width="400" height="500" className="w-[40vw] h-[70vh] mt-[40px] mx-[50px]"></Image>
        </div>
      </div>
    );
  }
  
  export default Contact;
  
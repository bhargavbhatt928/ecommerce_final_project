export default function ContactUs() {
  return (
    <div className="items-center flex flex-col">
      <div className="w-4/5">
        <div className=" flex flex-col items-center justify-center w-full">
          <div className="z-10 absolute w-1/3 items-center flex flex-col bg-sky-900 rounded-lg">
            <h1 className="text-3xl text-white font-bold pt-2">Contact Us</h1>
<hr className="w-4/5 border border-orange-400  mt-4"/>
            <form className="mt-4 mx-auto w-full rounded-lg text-white text-xl font-bold bg-sky-900 px-4 pt-4 pb-6  space-y-4">
              <label className="block leading-4 pt-2">Name</label>
              <input
                type="text"
                className="block bg-transparent w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
              />
              <label className="block leading-4 pt-2">Email</label>
              <input
                type="email"
                className="block bg-transparent w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
              />
              <label className="block bg-transparent leading-4 pt-2">Message</label>
              <textarea
                type="text"
                className="block w-full bg-transparent rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
              />
              <div className="w-full py-4">
              <button className=" border border-gray-300 bg-orange-400 text-white w-full rounded-md">
                Submit
              </button>
              </div>
            
            </form>
          </div>
          <img src="src/assets/img5.jpg" className="z-0 relative" />
        </div>
      </div>
    </div>
  );
}

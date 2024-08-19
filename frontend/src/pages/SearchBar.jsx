import React from 'react'

function Searchbar() {
  return (
    <div>
    <div className="flex flex-row backdrop-blur-md bg-black text-white font-bold bg-opacity-60">
    <div className="basis-1/4 mb-3 mt-2">
      <img
        src="src/assets/logoes/logo1.png"
        className="w-44 h-8 my-3 mx-4"
      />
    </div>
    <div className=" mt-5 flex flex-row basis-1/2">
      <input className="h-8 rounded-bl-lg w-4/5" />
      <button className="bg-orange-400 h-8 px-4 rounded-tr-lg">
        Search
      </button>
    </div>
    <div className="flex flex-row mt-5 basis-1/4 justify-end">
      <button className="bg-orange-400 rounded-md h-8 px-2 mr-9">
        SignUp
      </button>
      <button className="bg-orange-400 rounded-md h-8 px-2">LogIn</button>
      <img
        src="src/assets/logoes/cart.png"
        className="w-14 h-8 ml-9 mr-4"
      />
    </div>
  </div>
    </div>

  )
}

export default Searchbar
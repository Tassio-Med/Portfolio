import React from "react";

function Footer(){
  return(
    <div>
      <footer className="p-4 rounded-lg shadow md:px-6 md:py-6">
        <hr className="my-6 sm:mx-auto lg:my-8 border-t-slate-600"/>
        <span className="block text-sm text-center text-gray-500 sm:text-center ">
          © 2022 <a href="https://www.linkedin.com/in/tassiomed98" target="_blank" rel="noreferrer"className="hover:underline">Tássio M.</a> All Rights Reserved.
        </span>
	    </footer>
    </div>
  )
}

export default Footer;
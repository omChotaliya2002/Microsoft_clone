import React from "react";
import slider365 from './Images/M-365 icon.avif';
import logo from './Images/ms-logo.png';
import item1 from './Images/products/m-365.svg';
import item2 from './Images/products/x-box.svg';
import item3 from './Images/products/win-11.svg';
import item4 from './Images/products/surf-dev.svg';
import search from './Images/Search.png';
import cart from './Images/cart.svg';
import user from './Images/user.svg';

function Home() {
  return (

    <>
    <div className="navbar flex justify-between item-center p-[9px] select-none">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburgur inline-block cursor-pointer md:hidden">
          <div className="line h-0.5 w-6 my-1 bg-slate-500 "></div>
          <div className="line h-0.5 w-6 my-1 bg-slate-500 "></div>
          <div className="line h-0.5 w-6 my-1 bg-slate-500 "></div>
        </div>
        <div className="search md:hidden"> <img className="w-6 mx-5" alt="search" src={search}/> </div>
      </div>

      <div className="logo text-center md:order-1 flex select-none">
        <div className="flex items-center w-24 cursor-pointer"> <img src={logo} alt="Microsoft"/> </div>
        <div className="features w-fit md:w-auto md:static bg-gray-200 md:bg-white md:mt-2 absolute inset-0 md:flex md:mx-4 md:space-x-4 -translate-x-96 md:translate-x-0">
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Microsoft 365 </div>
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Teams </div>
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Copilot </div>
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Windows </div>
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Surface </div>
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Xbox </div>
          <div className="fitem text-sm hover:underline hover:underline-offset-4 cursor-pointer"> Support </div>
        </div>
      </div>

      <div className="cart text-center md:order-3 flex select-none">
        <div className="search hidden md:flex md:flex-row md:space-x-1"> 
           <p className="mt-2 text-sm mr-5 cursor-pointer"> All Microsoft </p>  
           <p className="hidden xl:block  mt-2 text-[15px] cursor-pointer"> Search </p>
          <img className="w-8 h-8 mt-1 cursor-pointer" src={search} alt="Search"/>
        </div>
        <div className="flex flex-row space-x-5 mx-2"> 
              <img className="w-9 ml-3 cursor-pointer" src={cart} alt="cart"/>
              <img className="w-9 cursor-pointer" src={user} alt="user"/>
        </div>
      </div>
    </div>


    <div className="slider flex flex-col-reverse md:flex-row cursor-pointer select-none"> 
        <div className="left flex-col justify-center md:items-center md:bg-[#ACC2FB]">
            <p className=" text-xl sm:text-2xl mx-3 sm:my-4 my-4 font-semibold lg:my-12 lg:ml-20">Achieve the extraordinary</p>

            <p className="sm:-my-2 my-2 w-[88%] mx-3 text-md font-normal md:text-base overflow-hidden lg:-my-9 lg:ml-20">Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.</p>
            <button className="sm:my-7 my-5 text-white mx-3 h-10 w-44 font-semibold bg-blue-600 hover:bg-blue-700 rounded-sm lg:my-16 lg:ml-20"> Shop Microsoft 365 </button>
        </div>
        
        <div className="right w-full"> 
               <img className="w-full h-full" src={slider365} alt="Microsoft 365"/> 
        </div>

    </div>
    
    <div className="products flex justify-center space-x-2 flex-col items-center sm:flex-row sm:justify-between space-y-6 p-4 mt-6 md:justify-center md:space-x-12 lg:justify-center lg:space-x-24 select-none">

            <div className="item flex justify-center items-center flex-col space">
              <img className="w-10 cursor-pointer mt-8"  src={item1} alt="Microsoft 365"/>
              <span className="text-blue-500 underline font-semibold cursor-pointer"> Choose your Microsoft 365 </span>
            </div>
 
            <div className="flex flex-col justify-center items-center">
                <img className="w-12 cursor-pointer"  src={item2} alt="Shop Xbox"/>
                <span className="text-blue-500 underline font-semibold cursor-pointer"> Shop Xbox </span>
           </div>

            <div className="flex flex-col justify-center items-center">
                <img className="w-10 cursor-pointer mt-2"  src={item3} alt="Get Windows 11"/>
                <span className="text-blue-500 underline font-semibold cursor-pointer"> Get Windows 11 </span>
            </div>
      
            <div className="item flex justify-center items-center flex-col">
              <img className="w-10 mr-2 cursor-pointer mt-2"  src={item4} alt="Surface devices"/>
              <span className="text-blue-500 underline font-semibold cursor-pointer"> Explore Surface devices </span>
            </div> 

    </div>

    </>
  );
}

export default Home;
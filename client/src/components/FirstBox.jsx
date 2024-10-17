import React from 'react';
import './FirstBox.css';

function FirstBox() {
  return (
    <div className='bg-image'>
      <div className='pt-[250px] pl-[150px] w-[729px] h-[126px]'>
        <h1 className='fade-in text-white text-5xl pb-10 font-inter font-bold'>
          The Carbon Credit Marketplace
        </h1>
        <h2 className='fade-in text-white text-lg pb-10 text-[20px]'>
          The premier online platform for carbon credit trading. Buy, sell, and trade carbon credits with confidence, and join the global movement towards a low-carbon economy.
        </h2>
        <button className='fade-in bg-[#3CAB90] rounded-3xl py-2 px-6 text-white m-4 shadow-lg'>
          Call Us Today
        </button>
        <button className='fade-in bg-[#FFBB1C] rounded-3xl py-2 px-6 text-white m-4 shadow-lg'>
          Request a Call Back
        </button>
      </div>
    </div>
  );
}

export default FirstBox;

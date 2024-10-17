import React from 'react'

function SecondBox() {
  return (
    <>
      <div className='grid grid-cols-2 h-48'>
        <div className=' w-[600px] ml-20 mt-5'>
          <p className=' font-inter text-[36px] p-4'>We offer a range of services to support your sustainability goals:</p>
          <ul className=' m-3 space-y-4 text-[13px] font-inter text-[#475467] ml-6'>
            <li>Carbon Credit Trading</li>
            <li>- Buy and sell carbon credits with ease</li>
            <li>- Expert advice on credit pricing and market trends</li>
            <li>- Access to a global network of carbon credit projects</li>
            <li>- Sustainability Consulting</li>
            <li>- Develop and implement sustainable business strategies</li>
            <li>- Conduct carbon footprint analysis and reduction planning</li>
            <li>- Identify and pursue renewable energy opportunities</li>
          </ul>
          <ul className=' m-8 space-y-3'>
            <li className=' font-bold font-inter'><span className=' text-green-500 pr-3'>01/</span>Project Development</li>
            <li className=' font-bold font-inter'><span className=' text-green-500 pr-3'>02/</span>Carbon Offset Services</li>
            <li className=' font-bold font-inter'><span className=' text-green-500 pr-3'>03/</span>Research and Analytics</li>
            <li className=' font-bold font-inter'><span className=' text-green-500 pr-3'>04/</span>Regulatory Advisory</li>
          </ul>
        </div>
        <div className="flex justify-center items-center my-10">
        <img
          src="Group 3.png" // Reference the image in the public folder
          alt="Descriptive Alt Text"
          className="max-w-full max-h-full object-contain" // Responsive styling
        />
        </div>
      </div>
    </>
  )
}

export default SecondBox
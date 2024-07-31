import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="text-white bg-orange-600 max-w-[1640px] mx-auto p-4 rounded flex flex-col items-center justify-center text-center">
        <div className='py-4'>
            <p className='uppercase text-[20px]'>6037 south blvd charlotte, nc . 704-554-6601- 704-554--6602</p>
        </div>
        <ul className='flex items-center justify-between gap-[20px] md:gap-[110px] text-[20px] md:text-[25px] uppercase'>
            <li>home</li>
            <li>menu</li>
            <li>catering menu</li>
            <li>hiring</li>
        </ul>
        <div className='py-4 text-[20px]'>
            <p>@ 500degreesbesteats . All rights reserved design by DSKY</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
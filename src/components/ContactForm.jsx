import React from 'react';

const ContactForm = () => { 
    return (
    <>
    
    <div id='SellCards' className="relative flex mx-8 sm:mx-16 sm:justify-center">
      <div className="hidden lg:inline absolute -left-50 top-0"><img src='/src/assets/large-pikachu-tilt.png' className="w-0 lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"  alt='Image shows a Pikachu Pokemon card'/></div>
      <div className="hidden lg:inline absolute -right-60 top-100"><img src='/src/assets/pokemon-back-cards.png' className="w-0 lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"  alt='Image shows the back of two Pokemon cards'/></div>
     
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-6 text-center lg:pt-16 lg:pb-16">
          <h2 className='mx-auto max-w-5xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl'>Get in touch with us</h2>
          <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600'>We buy Pokémon™ cards from collectors, fans, and sellers all across the UK—no matter where you're located. Whether you’ve got a single rare card or an entire collection, we make the selling process simple, fast, and hassle-free.</p>
      </div>
    </div>

    <div className='flex mx-8 mb-20 sm:mx-16 justify-center lg:mb-32'>
        <form action='' className='w-xl' method='POST' encType='multipart/form-data'>
         
        <div className='w-full mb-6'>
          <label className='py-2'>Name</label>
          <input type="text" id="name" name="name" className='border-1 w-full border-gray-300 p-3'/>
        </div>

        <div className='w-full mb-6'>
        <label className='py-2'>Email</label>
        <input type="text" id="email" name="email" className='border-1 w-full border-gray-300 p-3'/>
        </div>

        <div className='w-full mb-6'>
          <label className='py-2'>Details about the cards you want to sell</label>
          <textarea rows='8' id='message' name='message' className='border-1 w-full border-gray-300 p-3'></textarea>
        </div>

        <button type="submit" className='w-full sm:w-auto cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white'>Enquire Today</button>
        
        <span></span>
        
        </form>
      </div>

    </>
  );
};

export default ContactForm;
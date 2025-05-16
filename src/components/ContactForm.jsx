import React, { useState }  from 'react';
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const isNotFoundPage = !["/", "/about-us", "/contact-us", "/terms", "/privacy"].includes(location.pathname);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      details: ""
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email, details } = formData;
      const mailtoUrl = `mailto:contact@dayempire.co.uk?subject=Bulk%20Card%20Sale%20Enquiry%20-%20${encodeURIComponent(name)}&body=Name%3A%20${encodeURIComponent(name)}%0D%0AEmail%3A%20${encodeURIComponent(email)}%0D%0ACard%20Bulk%20Details%3A%20${encodeURIComponent(details)}`;
      window.open(mailtoUrl, "_blank");
  };

    return (
    <>
    
    <div id='SellCards' className="relative flex mx-8 sm:mx-16 sm:justify-center">
     
    {!isNotFoundPage && (
        <>
     
      <div className="hidden lg:inline absolute -left-50 top-10"><img src='/large-pikachu-tilt.webp' className="w-0 xl:w-[400px] 2xl:w-[600px]"  alt='Image shows a Pikachu Pokemon card'/></div>
      <div className="hidden lg:inline absolute -right-60 top-100"><img src='/pokemon-stacked-cards.webp' className="w-0 xl:w-[400px] 2xl:w-[600px]"  alt='Image shows stacked Pokemon cards'/></div>
    
      </>
)}

      {isNotFoundPage && (
        <>
          <div className="hidden lg:inline absolute -left-50 top-10">
            <img src="/team-rocket.webp" className="w-0 xl:w-[400px] 2xl:w-[600px]" alt="Image shows Team Rocket Leader" />
          </div>
          <div className="hidden lg:inline absolute -right-60 top-10">
            <img src="/persian.webp" className="w-0 xl:w-[400px] 2xl:w-[600px]" alt="Image shows Team Rocket Leader Persian" />
          </div>
        </>
        )}


      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-6 text-center lg:pt-16 lg:pb-16">
          <h2 className='mx-auto max-w-5xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl'>Get in touch with us</h2>
          <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600'>Getting in touch with us is easy! Whether you have a question about a specific card or just want to connect, we're here for collectors, fans, and sellers alike. Reach out today!</p>
      </div>
    </div>

    <div className='flex mx-8 mb-20 sm:mx-16 justify-center lg:mb-32'>
        <form action='' id='ContactForm' className='w-xl' method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
         
        <div className='w-full mb-6'>
          <label for="name" className='py-2'>Name</label>
          <input type="text" id="name" name="name" required className='border-1 w-full border-gray-300 p-3' onChange={handleChange}/>
        </div>

        <div className='w-full mb-6'>
        <label for="email" className='py-2'>Email</label>
        <input type="text" id="email" name="email" required className='border-1 w-full border-gray-300 p-3' onChange={handleChange}/>
        </div>

        <div className='w-full mb-6'>
          <label for="details" className='py-2'>Message</label>
          <textarea rows='8' id='details' name='details' required className='border-1 w-full border-gray-300 p-3' onChange={handleChange}></textarea>
        </div>

        <button type="submit" aria-label='Submit form' className='w-full sm:w-auto cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white'>Enquire today</button>
        
        </form>
      </div>

    </>
  );
};

export default ContactForm;
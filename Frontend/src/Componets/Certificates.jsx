import React from 'react';

const certification = [
  {
    cetificateImg: 'https://campus.w3schools.com/cdn/shop/files/certificate_of_completion_python_professional_995x786.jpg?v=1711022843',
    title: 'Python Certificate',
    description: 'Completion certificate for Python Professional course demonstrating core programming skills.'
  },
  {
    cetificateImg: 'https://cdn.educba.com/academy/wp-content/uploads/2022/07/JavaScript-Certification-Course-Certification.jpg',
    title: 'Basic Javascript',
    description: 'Certificate for foundational JavaScript skills including DOM manipulation and ES6.'
  },
  {
    cetificateImg: 'https://global.discourse-cdn.com/freecodecamp/optimized/3X/1/a/1a10b3336896b7939a35c42b4d18de70205f81ef_2_1024x669.png',
    title: 'JavaScript Algorithms & Data Structures',
    description: 'Certificate for mastering JS algorithms and data structure challenges on FreeCodeCamp.'
  },
  {
    cetificateImg: 'https://global.discourse-cdn.com/freecodecamp/optimized/3X/1/a/1a10b3336896b7939a35c42b4d18de70205f81ef_2_1024x669.png',
    title: 'JavaScript Algorithms & Data Structures',
    description: 'Certificate for mastering JS algorithms and data structure challenges on FreeCodeCamp.'
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className='py-24 sm:py-28 lg:py-32 dark:bg-border'>
      <div className='text-center mb-8 sm:mb-12'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-(--text-default) mb-2'>
          Certificates
        </h2>
        <p className='text-lg sm:text-xl text-gray-500'>
          Certifiactes awarded to me
        </p>
      </div>

      <div className='flex gap-4 sm:gap-6 px-4 sm:px-8 overflow-x-auto scrollbar-hide'>
        {certification.map((cert, index) => (
          <div key={index} className='bg-(--bg-secondary) dark:bg-(--bg-primary) p-4 sm:p-6 rounded-xl text-center w-[250px] sm:w-[300px] md:w-[380px] shadow shrink-0'>
            <div className='h-40 sm:h-48 mb-4'>
              <img 
                src={cert.cetificateImg} 
                alt={cert.title} 
                className='w-full h-full object-cover rounded-lg' 
              />
            </div>
            <h3 className='text-xl font-semibold text-(--text-default) mb-2'>{cert.title}</h3>
            <p className='text-gray-500 text-sm sm:text-base line-clamp-3'>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

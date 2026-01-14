import React from 'react';
import jsCert from '../assets/jsCert.png'
import pythonCert from '../assets/pythonCert.png'
import responsiveDesignCert from '../assets/responsiveCert.png'


const certification = [
  {
    cetificateImg: jsCert,
    title: 'Basic JavaScript Certificate',
    description: 'Developed a strong foundation in core JavaScript including asynchronous programming, DOM manipulation, and modern ES6+ syntax. Mastered logic implementation through loops, recursion, and advanced functional programming concepts.'
  },
  {
    cetificateImg: pythonCert,
    title: 'Python Certificate',
    description: 'Gained proficiency in Python fundamentals, focusing on algorithmic thinking and data structures. Experienced in writing clean, PEP 8 compliant code and developing scripts for automation and procedural programming.'
  },
  {
    cetificateImg: responsiveDesignCert,
    title: 'Responsive Web Design Certificate',
    description: 'Mastered the art of building flexible, mobile-first web layouts using CSS Grid, Flexbox, and Media Queries. Focused on creating accessible, user-centric interfaces that adapt seamlessly across all device screen sizes.'
  },
];
const Certificates = () => {
  return (
    <section id="certificates" className='py-24 sm:py-28 lg:py-32 dark:bg-border ml-4 mr-4'>
      <div className='text-center mb-8 sm:mb-12'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-(--text-default) mb-2'>
          Certificates
        </h2>
        <p className='text-lg sm:text-xl text-gray-500'>
          Certifiactes awarded to me
        </p>
      </div>

      <div className='flex gap-4 sm:gap-6 px-4 sm:px-8 overflow-x-auto no-scrollbar'>
        {certification.map((cert, index) => (
          <div key={index} className='bg-(--bg-secondary) dark:bg-(--bg-primary) p-4 sm:p-6 rounded-xl text-center w-62.5 sm:w-75 md:w-95 shadow shrink-0'>
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

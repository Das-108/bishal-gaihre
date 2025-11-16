import React from 'react'


const certification = [
  {
    cetificateImg: 'https://campus.w3schools.com/cdn/shop/files/certificate_of_completion_python_professional_995x786.jpg?v=1711022843',
    title: 'Python Certificate',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },
  {
    cetificateImg: 'https://cdn.educba.com/academy/wp-content/uploads/2022/07/JavaScript-Certification-Course-Certification.jpg',
    title: 'Basic Javascript',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },
  {
    cetificateImg: 'https://global.discourse-cdn.com/freecodecamp/optimized/3X/1/a/1a10b3336896b7939a35c42b4d18de70205f81ef_2_1024x669.png',
    title: 'Javasxript Algorithms and Data structures',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },
  {
    cetificateImg: 'https://global.discourse-cdn.com/freecodecamp/optimized/3X/1/a/1a10b3336896b7939a35c42b4d18de70205f81ef_2_1024x669.png',
    title: 'Javasxript Algorithms and Data structures',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit, voluptates corrupti placeat incidunt rem dolorum omnis ut dolore laudantium, voluptas, minima quaerat harum delectus maxime doloremque reiciendis nihil. Sequi'
  },

]

const Certificates = (props) => {
  return (
    <section className='-mx-4 lg:-mx-12'>
     
        <div className='text-center mb-1 p-4'>
            <h2 className='font-heading text-4xl lg:text-5xl text-textC '> Certificates</h2>
            <p className='font-body text-lg text-textC/70'>Recent work that showcase my approach</p>
        </div>
        

        <div className='flex gap-4 p-8 overflow-x-scroll scrollbar-hide'>

           {
            certification.map((elem,index) => {

                return (
                    <div key={index} className='bg--softgold p-6 rounded-xl text-center w-[300px] md:w-[480px] shadow items-center shrink-0'>
                    <div className='h-[200px] md:h-[250px] mb-4'>
                        <img className='w-full h-full object-cover rounded-lg'
                            src={elem.cetificateImg}
                            alt='Certificate {index+1}' 
                        />
                    </div>
                    <h2 className='font-heading text-xl font-bold mb-2 text-textC'>{elem.title}</h2>         
                    <p className='font-body text-base text-textC/80 line-clamp-3'>{elem.description}</p>
                    </div>
                )
            })
           }
            
            


            

        </div>


    </section>
  )
}

export default Certificates
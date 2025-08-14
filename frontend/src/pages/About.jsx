import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1 = {'ABOUT'} text2 = {'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia laborum, totam sapiente placeat quaerat architecto aliquam nisi labore assumenda provident ab, exercitationem dolor molestiae veniam corrupti dolores recusandae, cum quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium nam ipsum suscipit ipsam, nihil tenetur vel voluptates fuga voluptatibus inventore doloribus incidunt totam ex animi, eos autem non culpa!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, quisquam velit. Modi suscipit quae nostrum odit, praesentium placeat, magnam illum sint qui, exercitationem corrupti officia tenetur doloremque dolore! Soluta, repellendus?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2 = {'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text:sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Qualiy Assurance:</b>
          <p className = 'text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro harum accusamus esse deserunt aut eum! Modi dolorem rem omnis et minus id reiciendis atque illum libero? Sapiente, accusantium id!</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className = 'text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro harum accusamus esse deserunt aut eum! Modi dolorem rem omnis et minus id reiciendis atque illum libero? Sapiente, accusantium id!</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className = 'text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro harum accusamus esse deserunt aut eum! Modi dolorem rem omnis et minus id reiciendis atque illum libero? Sapiente, accusantium id!</p>
        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <div className='frostedBox h-auto w-auto mx-auto my-auto items-center rounded-lg drop-shadow-2xl py-2 px-4 flex space-x-12'>
      <div className='flex flex-row'>
        <img src="profile.jpeg" className='h-28 w-auto m-1 rounded-full'/>
          <div className='text'>
            <h1 className='text-white text-xl ml-4'>Hi I&#39;m 
            <TypeAnimation
          sequence={[
            1000,
            " Panyu!"
          ]}
          wrapper="span"
          cursor={true}
        /> </h1>
        <h3 className=' text-slate-300 ml-4' > Front-end Developer & <br/>Aspiring Content Creator</h3>
      </div>
    </div>
    <div className='iconDrawer '>
      <a href="https://twitter.com/PanyuTweets" className='icons order-1' target='_blank'> <img srcSet='twitter.svg' /> </a>
      <a href="https://youtube.com/@PanyuYT" className='icons order-2' target='_blank'> <img srcSet='youtube.svg' /> </a>
      <a href="https://github.com/PanyuDev" className='icons order-3' target='_blank'> <img srcSet='github.svg' /> </a>
      <a href="https://discord.gg/FUpeCRCva4" className='icons order-4' target='_blank'> <img srcSet='discord.svg' /> </a>
    </div>

      </div>
    </main>
  )
}

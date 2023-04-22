import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'postcss'
import { TypeAnimation } from 'react-type-animation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 mx-auto my-auto ${inter.className}`}>
      <div className='frostedBox h-36 w-2/6 mx-auto my-auto items-center rounded-lg drop-shadow-2xl py-4 px-6 flex space-x-4'>
        <img src="profile.png" className='h-28 w-28 rounded-full flex-row'/>
        <div>
          <h1 className='text-white text-xl'>Hi I'm 
          <TypeAnimation
        sequence={[
          1000,
          ' Panyu!'
        ]}
        wrapper="span"
        cursor={true}
      /> </h1>
      <h3 className=' text-slate-300' > Front-end Developer & <br/>Aspiring Content Creator</h3>
    </div>
    <div className='flex-col items-stretch w-6 h-24 float-right iconDrawer'>
      <a href="https://twitter.com/PanyuTweets" className='icons' target='_blank'> <img src="twitter.svg" /> </a>
      <a href="https://youtube.com/@PanyuYT" className='icons' target='_blank'> <img src="youtube.svg" /> </a>
      <a href="https://github.com/PanyuDev" className='icons' target='_blank'> <img src="github.svg" /> </a>
      <a href="https://discord.gg/FUpeCRCva4" className='icons discordDecidedToBeSpecial' target='_blank'> <img src="discord.svg" /> </a>
    </div>

      </div>
    </main>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'postcss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 mx-auto my-auto ${inter.className}`}>
      <div className='frostedBox h-36 w-2/6 mx-auto my-auto rounded-lg drop-shadow-2xl py-4 px-6'>

      </div>
    </main>
  )
}

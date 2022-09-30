import Head from 'next/head'
import Image from 'next/image'
import QrCode from '../public/image-qr-code.png'

export default function Home() {
  return (
    <div className='container'>
      <Image src={QrCode} objectFit='cover' alt='qr code' className='image' />
      <h2 className='text-header'>Improve your front-end skills by building projects</h2>
      <p className='text-body'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
    return <div>
        <div className='w-full h-screen relative'>
            <Image
                fill={true}
                objectFit={'cover'}
                src='/images/34986.png' alt=''></Image>
        </div>
    </div>
}

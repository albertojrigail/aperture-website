import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Investment() {
  return (
    <section className='h-screen pt-10'>
      <div className='flex flex-col items-center sm:p-12 md:pl-32 md:pr-32'>
        <h2 className='mr-6 ml-6 mt-6 hero-gradient-heading text-2xl md:text-4xl font-bold'>
          INVESTMENT
        </h2>

        <p className="mr-8 ml-8 text-5xl font-bold text-center">
          Invest in the future.
        </p>
      </div>

      <div className='m-8 justify-center items-center flex md:pl-32 md:pr-32 flex-col'>
        <h1 className='text-xl'>Want to have impact on what the future becomes? Become an <span className='hero-gradient-heading text-3xl'>Aperture Science Investor.</span></h1>

        <p className='pt-8 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet fermentum ligula. In eget nibh vitae enim laoreet auctor. Duis lobortis ligula eu libero tincidunt scelerisque. Aliquam velit nibh, gravida id auctor id, commodo at arcu. Etiam nec finibus ligula, in vulputate felis. Pellentesque quam risus, mollis quis sodales fringilla, pharetra ut purus.</p>
      </div>

      <Link href="/contact">
        <button class="flex mx-auto mt-56 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Contact us</button>
      </Link>
    </section>
  )
}
import { Suspense } from 'react';
import Hero from '../components/Hero'
import About from '../components/About'
import HeroTwo from '../components/HeroTwo'
import HeroTree from '../components/HeroTree'
export default  function Home() {

  return (
    <div className="container mx-auto ">
     <div className='flex justify-center items-center '>
          <h2 className='text-3xl font-medium py-4 px-2 my-8'>Convert images to PDF?</h2>
        </div>

<Suspense>


  <Hero/>
</Suspense>




<About/>
<HeroTwo/>
<HeroTree/>





    </div>
  );
}

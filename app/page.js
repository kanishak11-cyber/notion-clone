
import Carousel2 from '@/components/Carousel2'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import TabsComponent from '@/components/TabsComponent'
import Welcome from '@/components/Welcome'


export default function Home() {
  return (
    <div className='flex flex-col '>
      <Welcome />
      <Carousel2 />
      <TabsComponent />
      <Community />
      <Footer />
    </div>
  )
}

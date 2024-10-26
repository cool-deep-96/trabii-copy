
import GetStarted from '../Components/for_users/GetStarted'
import Features from '../Components/for_users/Features'
import Memories from '../Components/for_users/Memories'
import WhyUs from '../Components/for_users/WhyUs'
import Hero from '../Components/for_users/Hero'
import getStartedBg from '../assets/for_user/get_started_bg.png'

const ForUser = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${getStartedBg})`,backgroundAttachment: 'fixed' }}>
      <Hero/>
      <WhyUs/>
      <Memories />
      <Features />
      <GetStarted />
    </div>
  )
}

export default ForUser
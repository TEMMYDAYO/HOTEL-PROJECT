import {Header} from './Header';
import {Section} from './Component/Section';
import Pricing from './Component/Pricing';
import Information from './Component/Information'
export const Home =()=> {
    return (
<div  className='w-full' >
      <Header/>
      <Section/>
      <Pricing/> 
      <Information/>
</div>

    )
}
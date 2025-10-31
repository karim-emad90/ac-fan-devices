
import { Link } from 'react-router-dom'
import ac from '../assets/ac.png'
import fan from '../assets/fan.png'
export default function Home(){
    return(
        <section className="homePage w-full h-dvh bg-gray-700 flex flex-col justify-center items-center">
          <h2 className='text-white text-2xl font-bold'>أهلا بك عزيزى العميل نورتنا 👋</h2>
           

            <div className="devices w-full h-dvh bg-blue-950 flex flex-col justify-center gap-30 items-center">
                <h3 className='text-white text-xl font-medium'>قم بأختيار احد الأجهزة للتجربه</h3>

                <div className="images w-full h-auto flex justify-between items-center">
                    <Link className='w-[40%] h-[200px] hover:w-[47%] hover:h-[330px]'  to="/fan" >
                   <img className=' w-full h-full' src={fan} alt="" />
                </Link>
               
               <Link className='w-[40%] h-[200px] hover:w-[47%] hover:h-[330px]' to="/ac">
                  <img className='w-full h-full' src={ac} alt="" />
               </Link>
                </div>
                
               
            </div>
        </section>
    )
}
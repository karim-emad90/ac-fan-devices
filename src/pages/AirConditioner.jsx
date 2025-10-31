import { Link } from "react-router-dom"
export default function AirConditioner(){
  return (
    <>
    <section className="navLinks w-full h-10vh conatiner flex justify-center gap-6 ">
        <Link to="/home">Home Page</Link>
        <Link to="/fan">Fan</Link>
      </section>

      <h3>AC Page Later ... 😍</h3>
      </>
  )
}
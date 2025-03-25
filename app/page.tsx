import Banner from "./ui/banner";
import Navbar from "./ui/navbar";

export default function Page (){
  return(
    <div className="bg-amber-50 min-h-screen">
    <Navbar/>
    <Banner/>
    </div>
  )
}
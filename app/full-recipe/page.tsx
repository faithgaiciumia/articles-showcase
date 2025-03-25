import Navbar from "../ui/navbar";
import RecipeDeets from "../ui/recipedeets";

export default function Page() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navbar />
      <RecipeDeets/>
    </div>
  );
}

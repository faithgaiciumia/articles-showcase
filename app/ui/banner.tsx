import Link from "next/link";


export default function Banner() {
    return (
      <div className="bg-white w-[95%] mx-auto h-[75vh] shadow-lg rounded-xl p-6 flex items-center justify-between">
        <div className="w-[50%]">
          <img
            src="https://images.pexels.com/photos/22735421/pexels-photo-22735421.jpeg"
            alt="recipe-image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-[45%] flex flex-col gap-4">
          <p className="text-amber-600 font-semibold uppercase tracking-wide">Recipe of the Day</p>
          <h2 className="text-3xl font-bold text-gray-800">Chapati</h2>
          <p className="text-gray-500 text-lg">⏳ 10 minutes</p>
          <p className="text-gray-600 leading-relaxed">
            Soft, golden, and perfectly layered. Homemade chapatis are a treat for every occasion.
          </p>
          <Link href="/full-recipe">
          <button className="mt-4 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all w-fit">
            View Full Recipe
          </button>
          </Link>
        </div>
      </div>
    );
  }
  
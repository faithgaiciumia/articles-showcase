export default function Navbar() {
  return (
    <div className="py-4">
      <div className="bg-white  mx-auto w-[95%] rounded-lg shadow-lg p-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recipes</h1>
        </div>
        <div>
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all">
            Login
          </button>
          <button className="bg-white text-amber-600 border border-amber-600 px-6 py-3 rounded-lg hover:bg-amber-700 hover:text-white transition-all mx-2">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

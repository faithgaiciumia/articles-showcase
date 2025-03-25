import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-amber-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
        <div className="flex flex-col items-center">
          <UserPlus size={40} className="text-amber-600 mb-2" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password..."
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password..."
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg w-full hover:bg-amber-700 transition-all">
              Sign Up
            </button>
          </div>
          <div className="text-center mt-4 text-gray-600">
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-amber-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

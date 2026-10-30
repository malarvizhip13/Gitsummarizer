
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            GitSummarizer
          </Link>

          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Join GitSummarizer and simplify your coding journey.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="flex rounded-lg border border-gray-300 focus-within:border-indigo-500">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
                minLength={6}
                className="w-full rounded-lg px-4 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 text-sm text-indigo-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-indigo-600 hover:underline">
            Sign In
          </Link>
        </p>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-indigo-600">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

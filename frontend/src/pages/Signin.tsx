
import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            GitSummarizer
          </Link>

          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your account.
          </p>
        </div>

        <form className="space-y-5">
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
                placeholder="Enter your password"
                required
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

          <div className="flex justify-end">
            <Link to="#" className="text-sm font-medium text-indigo-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-indigo-600 hover:underline">
            Sign Up
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

export default SignIn;

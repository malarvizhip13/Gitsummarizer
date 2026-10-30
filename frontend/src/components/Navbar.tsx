
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-gray-600 hover:text-indigo-600";

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 bg-white px-6 py-5 md:px-16">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        GitSummarizer
      </Link>

      <div className="flex flex-wrap items-center gap-5 text-sm">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/features" className={linkStyle}>Features</NavLink>
        <NavLink to="/about" className={linkStyle}>About</NavLink>
        <NavLink to="/history" className={linkStyle}>History</NavLink>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/signin"
          className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

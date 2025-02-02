import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page not found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-medium text-lg rounded-lg hover:bg-orange-600"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

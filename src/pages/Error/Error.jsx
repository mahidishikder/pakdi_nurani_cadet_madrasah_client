import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        {/* Error Icon */}
        <div className="text-9xl font-bold text-gray-800 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Go Home
          </button>
        </div>
      </div>

      {/* Optional: Add a fun illustration or animation */}
      <div className="mt-12">
        <img
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/ad42057889c385dd8f84b8330f69269b.gif"
          alt="404 Illustration"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
}

export default Error;
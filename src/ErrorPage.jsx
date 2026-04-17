const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-gray-600 mt-2">Page Not Found</p>

      <button 
        onClick={() => window.location.href = "/"} 
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
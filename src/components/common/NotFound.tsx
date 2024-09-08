import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-9xl font-bold text-blue mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="bg-blue text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:bg-opacity-80">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

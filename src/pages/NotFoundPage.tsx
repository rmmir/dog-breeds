import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col gap-2 bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded'>
                404 - Page Not Found
                <Link 
                    className="flex justify-center inline-block bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out" 
                    to='/'>
                        Home Link
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
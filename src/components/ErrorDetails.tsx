import React from "react";

type ErrorDetailsProps = {
    details: string;
}

const ErrorDetails: React.FC<ErrorDetailsProps> = ({ details }) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
                {details}
            </div>
        </div>
    );
}

export default ErrorDetails;
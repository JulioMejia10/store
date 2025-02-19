import React from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-4 border-gray-300 border-t-sky-500 rounded-full animate-spin"></div>
        </div>
    )
}

export default Spinner
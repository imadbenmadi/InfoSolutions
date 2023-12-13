import React from "react";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-[50vh] bg-white">
            <div className="bg-gray-200 p-8 rounded shadow-xl w-[90%]">
                <h1 className="text-4xl font-bold text-gray-800">Not Found</h1>
                <p className="text-gray-600">
                    Sorry, the page you're looking for doesn't exist.
                </p>
            </div>
        </div>
    );
}

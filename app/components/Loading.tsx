import React from 'react'

export const Loading = () => {
    return (
        <div className="flex flex-col space-y-2 items-center justify-center min-h-screen bg-transparent">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
            <p>Loading...</p>
        </div>
    )
}

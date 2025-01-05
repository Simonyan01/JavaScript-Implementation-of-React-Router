export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-6xl font-bold text-blue-500">404</h1>
            <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
            <p className="text-gray-600 mt-2 text-center">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
        </div>
    )
}
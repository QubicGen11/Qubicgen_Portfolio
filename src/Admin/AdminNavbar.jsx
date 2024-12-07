import React from 'react'


const AdminNavbar = () => {

    const handleLogout = () => {
        // Remove the token from cookies
        document.cookie = "TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  return (
    <div>
          <nav className="backdrop-blur-md  shadow-sm" style={{backgroundColor:"rgba('0,0,0,0.1')"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-black">Admin Dashboard</h1>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleLogout}
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default AdminNavbar

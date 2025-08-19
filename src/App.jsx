import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Applayout from "./Layout/Applayout";
import AllRoutes from "./Routes/Routes";

const App = () => {

  return (
    <>
      <Router>
        <Applayout>
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <svg
                  className="w-8 h-8 text-indigo-600 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </div>
            }
          >
            <AllRoutes />
          </Suspense>
        </Applayout>
      </Router>
    </>
  )
}

export default App

import { Component, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Applayout from "./Layout/Applayout";
import HomePage from "./Layout/HomePage";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import { allTools } from "./Tools/AllTools";

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              {allTools.map(({ path }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </Suspense>
        </Applayout>
      </Router>
    </>
  )
}

export default App

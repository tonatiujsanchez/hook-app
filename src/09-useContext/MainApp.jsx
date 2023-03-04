import { Routes, Route, Navigate, Link } from "react-router-dom"

import { UserProvider } from "./context/UserProvider"

import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {
    return (
        <UserProvider>
            <header>
                <Navbar />
            </header>

            <div className="p-3">
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="about" element={ <AboutPage /> } />
                    <Route path="login" element={ <LoginPage /> } />

                    {/* <Route path="/*" element={ <LoginPage /> } /> */}
                    <Route path="/*" element={ <Navigate to="/login" /> } />
                </Routes>
            </div>
        </UserProvider>
    )
}

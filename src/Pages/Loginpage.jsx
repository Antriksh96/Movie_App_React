import React, { useState } from 'react'
import { signup, login } from '../firebase'


function Loginpage() {

    const [signState, setSignState] = useState('sign-in')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user_auth = (event) => {

        event.preventDefault();
        console.log("user_auth fun called")
        console.log(signState)

        if (signState === 'sign-in') {
            console.log("calling signin fun")
            login(email, password)

        }
        else {
            console.log("calling signup fun")
            signup(name, email, password);
        }
    }

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
            style={{ backgroundImage: `url(https://wallpapers.com/images/hd/dark-city-background-vb1cjv17ceuwtja4.jpg)` }}
        >
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
                <form>
                    <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-wide">
                        {signState === "sign-in" ? "Welcome Back" : "Create an Account"}
                    </h2>

                    {signState === "sign-up" && (
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-200">
                                Your Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                    )}

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-200">
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="example@company.com"
                            className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-200">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="••••••••••"
                            className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-6 text-gray-300">
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                id="checkbox-remember"
                                type="checkbox"
                                className="w-4 h-4 rounded border-white/30 bg-white/10 focus:ring-indigo-400"
                            />
                            Remember me
                        </label>

                        <a href="#" className="text-sm hover:text-indigo-400">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={user_auth}
                        className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition-all"
                    >
                        {signState}
                    </button>

                    <p className="text-center text-gray-300 text-sm mt-5">
                        {signState === "sign-in" ? "Not registered?" : "Already have an account?"}{" "}
                        <a
                            href="#"
                            onClick={() =>
                                signState === "sign-in"
                                    ? setSignState("sign-up")
                                    : setSignState("sign-in")
                            }
                            className="text-indigo-400 hover:underline"
                        >
                            {signState === "sign-in" ? "Create Account" : "Sign In"}
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Loginpage
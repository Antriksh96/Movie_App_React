import React, { useState } from 'react' 
import { ResetEmail } from '../firebase';
import { useNavigate } from 'react-router-dom';

function ResetEmailPage() {  

    const [email, setEmail] = useState(''); 

    const user_auth = (event) => {

        event.preventDefault(); 
        ResetEmail(email)
    }

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
            style={{ backgroundImage: `url(https://wallpapers.com/images/hd/dark-city-background-vb1cjv17ceuwtja4.jpg)` }}
        >
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
                <form>
                    <h2 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
                        Forget Your Password
                    </h2> 

                      <h3 className="text-xl font-bold text-center text-white mb-6 tracking-wide">
                        We will send you an email with instructions on how to reset your password.
                    </h3> 

                    <div className="mb-9">
                        <label className="block mb-2 text-sm font-medium text-gray-200">
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter a New Password"
                            className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>  

                   

                    <button
                        type="button"
                        onClick={user_auth}
                        className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition-all"
                    >
                         Email Me
                    </button>
 
                </form>
            </div>
        </div>
    )
}

export default ResetEmailPage


import React, { useState } from 'react'
import { confirmPasswordReset } from 'firebase/auth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from '../firebase';

function Newpasswordpage() {

    let [newpass, setNewpass] = useState('')
    const [params] = useSearchParams();
    const oobCode = params.get('oobCode')  
    let navigate = useNavigate()


    const handleReset = async () => {
        try {
            await confirmPasswordReset(auth, oobCode, newpass)
            alert("Password updated successfully");
            navigate('/loginpage')

        } catch (error) {
            alert("Error")
        }
    }

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
            style={{ backgroundImage: `url(https://wallpapers.com/images/hd/dark-city-background-vb1cjv17ceuwtja4.jpg)` }}
        >
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
                <form>
                    <h2 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
                        Change Your Password
                    </h2>

                    <h3 className="text-md font-bold text-center text-white mb-6 tracking-wide">
                        Enter a new password below to change your password.
                    </h3>

                    <div className="mb-9">
                        <label className="block mb-2 text-sm font-medium text-gray-200">

                        </label>
                        <input
                            value={newpass}
                            onChange={(e) => setNewpass(e.target.value)}
                            type="password"
                            placeholder="Enter a New Password"
                            className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>



                    <button
                        type="button"
                        onClick={handleReset}
                        className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition-all"
                    >
                        Reset Password
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Newpasswordpage
import { Link } from "react-router-dom";
import "../index.css";

const Login = () => {
    return (
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover bg-center bg-login-bg">
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form>
                    <div className="relative my-4">
                        <input type="email" className="block w-72 px-2 py-2 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-emerald-500 peer" placeholder=" "/>
                        <label className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-500">Your Email</label>
                    </div>
                    <div className="relative my-4">
                        <input type="password" className="block w-72 px-2 py-2 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-emerald-500 peer" placeholder=" "/>
                        <label className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-500">Your Password</label>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember-me" className="w-4 h-4 text-emerald-500 bg-transparent border-gray-300 rounded focus:ring-emerald-500"/>
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                                Remember Me
                            </label>
                        </div>
                        <span className="text-sm text-emerald-400 cursor-pointer hover:underline">Forgot Password?</span>
                    </div>
                    <button  className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login
                    </button>
                    <div className="text-center">
            <span className="text-sm text-gray-300">
              New Here?{" "}
                <Link to="/Register" className="text-emerald-400 hover:underline">
                Create an Account
              </Link>
            </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

import { Link } from "react-router-dom";
import "../index.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {RootState} from "../store/Store.ts";
import {setUser} from "../slice/UserSlice.ts";

const Register = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const users = useSelector((state: RootState) => state.user.users);

    //register
    function Register(e){
        e.preventDefault();
        const userRegister = users.some(
            (user) =>user.name === name && user.email === email && user.password === password && user.role === role
        );
        if (userRegister) {
            const newUser = {name, email, password, role};
            dispatch(setUser(newUser));
            alert("User registered successfully!");
        }else {
            alert("User registered Unsuccessfully!");
        }

    }
    return (
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover bg-center bg-register-bg">
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
                <form onSubmit={Register}>
                    <div className="relative my-4">
                        <input type="name" className="block w-72 px-2 py-2 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-emerald-500 peer" placeholder=" " onChange={(e) => setName(e.target.value)}/>
                        <label className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-500">Your Name
                        </label>
                    </div>
                    <div className="relative my-4">
                        <input type="password" className="block w-72 px-2 py-2 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-emerald-500 peer" placeholder=" "  onChange={(e) =>setPassword(e.target.value)}/>
                        <label className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-500">Password</label>
                    </div>
                    <div className="relative my-4">
                        <input type="email" className="block w-72 px-2 py-2 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-emerald-500 peer" placeholder=" "  onChange={(e) => setEmail(e.target.value)}/>
                        <label className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-500">Your Email</label>
                    </div>
                    <div className="relative my-4">
                        <select className="block w-72 px-2 py-2 text-sm text-black bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-emerald-500 peer"  onChange={(e) => setRole(e.target.value)}>
                            <option value="" disabled selected hidden>Select Role
                            </option>
                            <option value="manager">Manager</option>
                            <option value="scientist">Scientist</option>
                            <option value="administrator">Administrator</option>
                        </select>
                        <label className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-500">Role</label>
                    </div>
                    <button
                        className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                        type="submit" onClick={Register}>Register
                    </button>
                    <div className="text-center">
            <span className="text-sm text-gray-300">
              Already have an account?{" "}
                <Link to="/login" className="text-emerald-400 hover:underline">
                Login
              </Link>
            </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

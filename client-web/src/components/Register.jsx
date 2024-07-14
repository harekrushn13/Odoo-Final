import { useState } from "react";
import { fetchPost } from "../apis/fetch";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await fetchPost(
                "login",
                "",
                JSON.stringify({ role, password, email })
            );
            setLoading(false);
            if (result.success) {
                setError("");
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("username", result.data.username || email);
                localStorage.setItem("role", role);
                navigate("/" + role.toLowerCase());
            } else {
                setError(result.message);
            }
        } catch (error) {
            setLoading(false);
            setError("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                >
                    Odoo Hackathon
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign Up to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={login}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-0 focus:border-blue-300"
                                    placeholder="name@company.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="fullname"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-0 focus:border-blue-300"
                                    placeholder="John Deo"
                                    required
                                    value={fullname}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-0 focus:border-blue-300"
                                    placeholder="John123"
                                    required
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-0 focus:border-blue-300"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <Link
                                    to="/login"
                                    className="text-sm font-medium text-primary-600 hover:underline"
                                >
                                    Sign in
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#27616e] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={loading}
                            >
                                {loading ? "Sign up..." : "Sign Up"}
                            </button>
                            {error && <div className="text-red-600 text-center">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;

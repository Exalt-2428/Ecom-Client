'use client';
import React, { useState, useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // corrected the import statement
import { AuthContext } from '@/context/AuthContext';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Icon } from '@iconify/react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, loading, login, error, success } = useContext(AuthContext);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (user && pathname !== '/my-account') {
            router.push('/my-account');
        }
    }, [user, pathname]);

    if (loading) {
        return <h1>Loading...</h1>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loggedIn = await login(email, password);
        if (loggedIn) {
            router.push('/my-account');
        }
    };

    return (
        <>
        <Header />
        <div className="bg-blue-800 flex items-center justify-center h-screen font-roboto">
            <div className="bg-white p-8 rounded shadow-md w-96 text-black">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-center text-sm font-medium mb-4">Login to your account</p>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input type="text" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} value={email}
                            className="w-full border rounded p-2 text-sm font-light focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} value={password}
                            className="w-full border rounded p-2 text-sm font-light focus:outline-none focus:border-blue-400 mb-8"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-800 text-white text-sm rounded py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
                </form>
                <p className="text-center text-sm font-roboto mt-6">
                    New to My App? <a href="/auth/register" className="text-blue-500">Sign Up</a>
                </p>{
                        error &&
                        <p className="text-center text-sm font-robot mt-2 bg-red-600 p-2 rounded-lg text-white">
                            <Icon icon="ic:sharp-error" className="inline-block align-middle mr-1" /> {error}
                        </p>}
                        {success &&
                    <p className="text-center text-sm font-robot mt-2 bg-green-600 p-2 rounded-lg text-white">
                        <Icon icon="ooui:success" className="inline-block align-middle mr-1" /> {success}
                    </p>}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Login;
'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    return (
        <header className='bg-white w-full text-left text-[2rem] text-gray-200 py-4'>
            <div className='z-20 bg-white px-4 xs:px-12 sm:px-20 lg:px-28 xl:px-16 hxl:px-28 2xl:px-64 3xl:px-96 text-[1rem] flex justify-between items-center'>
                <a href='/' className='text-black'>Home</a>
                {user ? (
                    <div className='flex gap-8'>
                        <h1 className='text-black'>Welcome, {user.firstName}!</h1>
                        {user.isSuperAdmin && (
                            <div className='flex gap-4'>
                               <a href='/superadmin/dashboard' className='text-red-500'>SuperAdmin</a>
                            </div>
                        )}
                        <button className='text-black' onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className='flex gap-4'>
                        <a href='/auth/login' className='text-black'>Login</a>
                        <a href='/auth/register' className='text-black'>Register</a>
                    </div>
                )
                }
            </div>
        </header>
    )
}

export default Header;
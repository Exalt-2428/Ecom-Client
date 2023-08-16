import React from 'react';
import { Icon } from '@iconify/react';

const SuperAdminHeader = () => {
    return (
        <header className='superadmin-header bg-[#122e42] w-full text-left text-[2rem] text-gray-200 py-4'>
            <div className='header-content z-20 px-4 xs:px-12 sm:px-20 lg:px-28 xl:px-16 hxl:px-28 2xl:px-64 3xl:px-96 text-[1rem] flex justify-between items-center'>
                <nav className='navigation flex items-center'>
                    <a href='/superadmin/dashboard' className='text-[1.5rem] font-bold text-red-500'>SuperAdmin</a>
                    <ul className='nav-list flex items-center ml-8'>
                        <li className='nav-item ml-8 relative'>
                            <p className='nav-link text-[#29b6ff] hover:text-white flex items-center'>
                                
                                <span className="">Admins&nbsp;</span>
                                <Icon icon="mingcute:down-fill" height="16" />
                                </p>
                            
                            <ul className='submenu absolute left-0 mt-2 py-2 w-48 rounded-lg shadow-md glass'>
                                <li>
                                    <a href='/superadmin/admins/all' className=' submenu-link block px-4 py-2 text-white hover:bg-[#29b6ff] hover:text-[#122e42]'>All Admins</a>
                                </li>
                                <li>
                                    <a href='/superadmin/admins/create' className='submenu-link block px-4 py-2 text-white hover:bg-[#29b6ff] hover:text-[#122e42]'>Create Admin</a>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item ml-8'>
                            <a href='/superadmin/users' className='nav-link text-[#29b6ff] hover:text-white'>Users</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default SuperAdminHeader;

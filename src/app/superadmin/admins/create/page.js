"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SuperAdminHeader from "@/components/Layout/SuperAdmin/Header";

const SuperAdmin = () => {
  const { loading, isSuperAdmin, addAdmin } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  const [newAdmin, setNewAdmin] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });

  useEffect(() => {
    if (!loading) {
      if (!isSuperAdmin && pathname !== '/profile') {
        router.push('/profile');
      }
    }
  }, [loading, isSuperAdmin, pathname]);

  if (loading) {
    return <h1>Loading...</h1>
  }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAdmin({ ...newAdmin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // TODO: Add form validation (like confirming the password) here before proceeding
        
        await addAdmin(newAdmin);
        
        // Optionally, reset the form to the initial state after submission
        // setNewAdmin({ firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '' });
      };


  return (
    <>
      <Header />
      <SuperAdminHeader />
      <div className="flex items-center justify-center h-screen bg-blue-500">
        <div className="box-container mx-auto p-8 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Create New Admin</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
              <input type="text" name="firstName" value={newAdmin.firstName} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                <input type="text" name="lastName" value={newAdmin.lastName} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                <input type="text" name="username" value={newAdmin.username} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" name="email" value={newAdmin.email} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" name="password" value={newAdmin.password} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                <input type="password" name="confirmPassword" value={newAdmin.confirmPassword} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Create Admin
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuperAdmin;
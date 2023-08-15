"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "../../../context/AuthContext";
import Header from "../../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SuperAdminHeader from "@/components/Layout/SuperAdmin/Header";

const SuperAdmin = () => {
  const { loading, isSuperAdmin } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  // const [newAdmin, setNewAdmin] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });

  useEffect(() => {
    if (!loading) {
      if (!isSuperAdmin && pathname !== '/profile') {
        router.push('/profile');
      }
    }
  }, [loading, isSuperAdmin, pathname]);

//   useEffect(() => {
//     if (isSuperAdmin) {
//       getAdmins();
//     }
//   }, [isSuperAdmin]);

  if (loading) {
    return <h1>Loading...</h1>
  }

//   const handleDeleteAdmin = (adminId) => {
//     deleteAdmin(adminId);
//   };

  return (
    <>
      <Header />
      <SuperAdminHeader />
      <div className="flex items-center justify-center h-screen bg-blue-500">
        <div className="box-container mx-auto p-8 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">SuperAdmin Dashboard</h1>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Existing Users</h2>
            {/* <ul>
              {Array.isArray(admins) && admins.map((admin) => (
                <li key={admin.id} className="flex items-center mb-2">
                  <span className="mr-2">{admin.firstName} {admin.lastName}</span>
                  <span className="mr-2">{admin.username}</span>
                  <span className="mr-2">{admin.email}</span>
                  <button
                    onClick={() => handleDeleteAdmin(admin.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default SuperAdmin;
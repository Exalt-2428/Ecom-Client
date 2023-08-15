"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "../../../context/AuthContext";
import Header from "../../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SuperAdminHeader from "@/components/Layout/SuperAdmin/Header";

const SuperAdmin = () => {
  const { loading, isSuperAdmin, deleteAdmin, getAdmins, admins } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  // const [newAdmin, setNewAdmin] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });

  useEffect(() => {
    if (!loading) {
      if (!isSuperAdmin && pathname !== '/my-account') {
        router.push('/my-account');
      }
    }
  }, [loading, isSuperAdmin, pathname]);

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleDeleteAdmin = (adminId) => {
    deleteAdmin(adminId);
  };

  return (
    <>
      <Header />
      <SuperAdminHeader />
      <div className="flex items-center justify-center h-screen bg-blue-500">
        <div className="box-container mx-auto p-8 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold">SuperAdmin Dashboard</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default SuperAdmin;
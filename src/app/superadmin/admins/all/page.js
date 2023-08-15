"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "../../../../context/AuthContext";
import Header from "../../../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SuperAdminHeader from "@/components/Layout/SuperAdmin/Header";

const SuperAdmin = () => {
  const { loading, isSuperAdmin, deleteAdmin, admins } =
    useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!isSuperAdmin && pathname !== "/profile") {
        router.push("/profile");
      }
    }
  }, [loading, isSuperAdmin, pathname]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteAdmin = (adminId) => {
    deleteAdmin(adminId);
  };

  const alternatingBgClasses = ["bg-gray-100", "bg-gray-200"];

  return (
    <>
      <Header />
      <SuperAdminHeader />

      <div className="flex items-center justify-center h-screen bg-blue-500">
        <div className="box-container mx-auto p-8 bg-white w-3/5">
          <h1 className="text-2xl text-center font-semibold mb-4">
            SuperAdmin Dashboard
          </h1>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">All Admins</h2>
            <div className=" border-gray-400 rounded-lg overflow-x-auto border">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-300 border">
                    <th className="p-2 text-center border-gray-400">Name</th>
                    <th className="p-2 text-center border-gray-400 border-l">
                      Username
                    </th>
                    <th className="p-2 text-center border-gray-400 border-l">
                      Email
                    </th>
                    <th className="p-2 text-center border-gray-400 border-l">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(admins) &&
                    admins.map((admin, index) => {
                      const alternatingBgClass =
                        alternatingBgClasses[index % 2];
                      return (
                        <tr
                          key={admin._id}
                          className={`border ${alternatingBgClass}`}
                        >
                          <td
                            className={`p-2 text-center  border-gray-400 ${alternatingBgClass}`}
                          >
                            {admin.firstName} {admin.lastName}
                          </td>
                          <td
                            className={`p-2 text-center border-l border-gray-400 ${alternatingBgClass}`}
                          >
                            {admin.username}
                          </td>
                          <td
                            className={`p-2 text-center border-l border-gray-400 ${alternatingBgClass}`}
                          >
                            {admin.email}
                          </td>
                          <td
                            className={`p-2 text-center border-l  border-gray-400 ${alternatingBgClass}`}
                          >
                            <button
                              onClick={() => handleDeleteAdmin(admin.id)}
                              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuperAdmin;
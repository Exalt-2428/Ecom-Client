"use client";
import React, { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const SuperAdmin = () => {
  const { loading, isSuperAdmin } = useContext(AuthContext);
    const router = useRouter();
    const pathname = usePathname();

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

  return (
    <>
      <Header />
      <h1>SuperAdmin</h1>
      <Footer />
    </>
  );
};

export default SuperAdmin;

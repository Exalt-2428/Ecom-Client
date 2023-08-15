"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const SuperAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
      if (!user) router.push('/auth/login');
  }, [user]);

  useEffect(() => {
        if (user && !user.isSuperAdmin) router.push('/profile');
    }, [user]);

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

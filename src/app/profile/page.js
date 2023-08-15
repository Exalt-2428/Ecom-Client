"use client";
import React, { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const Profile = () => {
  const { loading, isLoggedIn } = useContext(AuthContext);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await isLoggedIn();
            if (!loggedIn && pathname !== '/auth/login') {
                router.push('/auth/login');
            }
        };
        checkLoginStatus();
    }, [pathname]);

    if (loading) {
        return <h1>Loading...</h1>
    }

  return (
    <>
      <Header />
      <h1>Profile</h1>
      <Footer />
    </>
  );
};

export default Profile;

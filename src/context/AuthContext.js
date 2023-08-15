'use client';
import React, { createContext, useState, useEffect } from 'react';
import api, { setAuthToken, getAuthToken, removeAuthToken } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(true); // true initially
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = getAuthToken();
                if (token) {
                    setAuthToken(token);
                    const res = await api.get('/users/me');
                    setUser(res.data);
                    setIsSuperAdmin(res.data.isSuperAdmin); // Set the isSuperAdmin state
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const login = async (email, password) => {
        try {
            setLoading(true);
            const res = await api.post('/users/login', { email, password });
            if (res.status === 200) {
                setSuccess(res.data.msg);
            }
            setAuthToken(res.data.token);
            setUser(res.data.user);
            return true;
        } catch (error) {
            if (error.response) {
                setError(error.response.data.msg);
            }
            console.log(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await api.post('/users/logout');
        } catch (error) {
            console.log(error);
        }
        setUser(null);
        removeAuthToken();
    };

    const register = async (name, email, password) => {

        setLoading(true);
        try {
            const res = await api.post('/users/register', { name, email, password });
            if (res.status === 200) {
                setSuccess(res.data.msg);
            }
            setAuthToken(res.data.token);
            setUser(res.data.user);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.msg);
            }
            console.log(error);
        }
        setLoading(false);
    };

    const isLoggedIn = async () => {
        setLoading(true);
        try {
            const token = getAuthToken();
            console.log(token);
            const res = await api.get('/users/check/');
            if (res.data.loggedIn) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register, error, success, isSuperAdmin, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
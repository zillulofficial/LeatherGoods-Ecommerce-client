import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext= createContext()
const auth= getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]= useState()
    const axiosPublic= useAxiosPublic()
    const [loader, setLoader]= useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail= currentUser?.email || user?.email
            const loggedUser= {email: userEmail}
            setUser(currentUser)
            if (currentUser) {
                axiosPublic.post(`/jwt`, loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                })
                
                setLoader(false)
            }
            else{
                axiosPublic.post(`/logout`, loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                })
                
                setLoader(false)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo= {
        user,
        setUser,
        loader,
        createUser,
        updateUserProfile,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
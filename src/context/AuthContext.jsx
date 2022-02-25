import React, { useContext, useState, useEffect } from "react"
import { auth } from "../components/firebase";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged} from 'firebase/auth'
import { Link, useNavigate  } from "react-router-dom"
import Post from '../components/PostPage';
import SignIn from "../components/SignIn";



const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const history = useNavigate();
  
 function signup(auth,email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
   }

  //  function login(auth,email, password) {
  //   return signInWithEmailAndPassword(auth,email, password)
  //  }

  // function logout() {
  //   return auth.signOut()
  // }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    onAuthStateChanged (auth, user => {
      setUser(user);
      setLoading(false);


      //****** */
    // history ('/')
    })

   
  }, [])
  const value = {
    user,
    // login,
    //signup,
    // logout,
    // resetPassword, 
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    
    </AuthContext.Provider>
  )
}
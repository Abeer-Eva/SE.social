import React, { useContext, useState, useEffect } from "react"
import { auth } from "../components/firebase";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut} from 'firebase/auth'
import { Link, useNavigate  } from "react-router-dom"
import Post from '../components/PostPage';
import SignIn from "../components/SignIn";



const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext);




export function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [chats, setChats]=useState(null)
  const history = useNavigate();
  
//  function signup(auth,email, password) {
//     return createUserWithEmailAndPassword(auth, email, password)
//    }

  //  function login(auth,email, password) {
  //   return signInWithEmailAndPassword(auth,email, password)
  //  }

  //  function logout(auth) {
  //    signOut(auth)
  //    history('/')
  //  }

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
      setChats(chats);
      
      

      //****** */
    //
    })

   
  }, [user, history])
  const value = {
    user,
    chats
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
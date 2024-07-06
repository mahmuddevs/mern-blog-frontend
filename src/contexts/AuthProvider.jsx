import axios from "axios"
import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    const token = Cookies.get('token')
    if(token){
      axios.get('http://localhost:3000/users/verify', { withCredentials: true })
        .then((res) => { 
          setUser(res.data) 
          setUserLoading(false)     
         })
        .catch((error) => { console.log(error) })
    }else{
      setUserLoading(false) 
    } 
    
  }, []);
console.log(user);

  const values = {
    user,
    setUser,
    userLoading,
    setUserLoading
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
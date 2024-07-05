import axios from "axios"
import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  const [userLoading, setUserLoading] = useState(false)

  useEffect(() => {
    const token = Cookies.get('token')
    if(token){
      axios.get('http://localhost:3000/users/verify', { withCredentials: true })
        .then((res) => { setUser(res.data) })
        .catch((error) => { console.log(error) })
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
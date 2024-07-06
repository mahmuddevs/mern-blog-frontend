import { useForm } from 'react-hook-form'
import LoginForm from '../../components/LoginForm'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { user, setUser, setUserLoading } = useAuth()
  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3000/users/login', data, { withCredentials: true })
      .then((res) => { 
          setUser(res?.data)
      })
      .catch((error) => { console.log(error); })
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  return (
    <LoginForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} />
  )
}

export default Login
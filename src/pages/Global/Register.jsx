import { useForm } from 'react-hook-form'
import axios from 'axios'
import RegistrationForm from '../../components/RegistrationForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        await axios.post('http://localhost:3000/users/register', data)
            .then((res) => {
                if (res.data == "User Exists") {
                    setError("User Exists")
                } else {
                    res.data && console.log(res.data)
                    setError("")
                    navigate('/')
                }
            })
            .catch((error) => { console.log(error) })
    }
    return (
        <div>
            {error && <div className="alert alert-danger alert-dismissible mx-auto" style={{width:'70%'}} role="alert">
                {error}
                <button className="btn-close" onClick={() => { setError('') }}></button>
            </div>}
            <RegistrationForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} getValues={getValues} />
        </div>
    )
}

export default Register
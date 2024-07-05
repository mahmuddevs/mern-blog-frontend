import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from 'react';

const LoginForm = ({ register, handleSubmit, errors }) => {
    const [showPass, setShowPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div style={{ height: "65vh" }} className='d-flex justify-content-center align-items-center'>
            <form className='w-25 mx-auto mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
                    <input type="text" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Invalid email address'
                            }
                        })} />
                    {errors.email && <div className='text-danger'>{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                    <div className='position-relative'>
                        <input type={showPass ? 'text' : 'password'} name='password' className="form-control" id="password"
                            {...register('password', {
                                required: "Passowrd is required.",
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                },
                                maxLength: {
                                    value: 32,
                                    message: 'Password must not exceed 32 characters'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
                                    message: 'Password must contain one uppercase letter, one lowercase letter, one number, and one special character'
                                }
                            })}
                        />
                        <span className='position-absolute' style={{ right: '2%', cursor: 'pointer', top: '20%' }} onClick={handleShowPass}>
                            {!showPass ? (
                                <BsFillEyeFill style={{ fontSize: '25px' }} />
                            ) : (
                                <BsEyeSlashFill style={{ fontSize: '25px' }} />
                            )}
                        </span>
                    </div>
                    {errors.password && <div className='text-danger'>{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <span>Don't have an account? <Link to={'/register'}>Register</Link></span>
            </form>
        </div>
    )
}

export default LoginForm
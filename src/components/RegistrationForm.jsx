import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";

const RegistrationForm = ({ register, handleSubmit, errors, getValues }) => {
    const [showPass, setShowPass] = useState(false)
    const [showConfPass, setShowConfPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    const handleShowConfPass = () => {
        setShowConfPass(!showConfPass)
    }
    return (
        <div style={{ height: "65vh" }} className='d-flex justify-content-center align-items-center'>
            <form className='w-25' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-bold"><strong>Name</strong></label>
                    <input type="text" name="name" className="form-control" id="name"
                        {...register('name', {
                            required: "Name is required."
                        })} />
                    {errors.name && <div className='text-danger'>{errors.name.message}</div>}
                </div>
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
                    <div className="position-relative">
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
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label"><strong>Confirm Password</strong></label>
                    <div className="position-relative">
                        <input type={showConfPass ? 'text' : 'password'} name='confirmPassword' className="form-control" id="confirmPassword"
                            {...register('confirmPassword', {
                                required: "Confirm Passowrd is required.",
                                validate: (value) => {
                                    return getValues('password') === value || "Passwords don't match"
                                }
                            })}
                        />
                        <span className='position-absolute' style={{ right: '2%', cursor: 'pointer', top: '20%' }} onClick={handleShowConfPass}>
                            {!showConfPass ? (
                                <BsFillEyeFill style={{ fontSize: '25px' }} />
                            ) : (
                                <BsEyeSlashFill style={{ fontSize: '25px' }} />
                            )}
                        </span>
                    </div>
                    {errors.confirmPassword && <div className='text-danger'>{errors.confirmPassword.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                <span>Already have an account? <Link to={'/login'}>Login</Link></span>
            </form>
        </div>
    )
}

export default RegistrationForm
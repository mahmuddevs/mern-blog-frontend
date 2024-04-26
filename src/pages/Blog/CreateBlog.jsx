import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import Form from '../../components/Form'

const CreateBlog = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [uImg, setUImg] = useState()
  const [blog, setBlog] = useState({
    title: '',
    author: '',
    content: '',
    postThumbnail: ''
  })

  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }

  const handleThumbnailChange = (e) => {
    if (e.target.files[0]) {
      setUImg(URL.createObjectURL(e.target.files[0]))
    }
    setBlog((prevBlog) => ({
      ...prevBlog,
      [e.target.name]: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!blog.title || !blog.author || !blog.content || !blog.postThumbnail) {
      setError(true)
    }

    setLoading(true)
    axios
      .post('http://localhost:3000/blogs/add-blog',
        blog,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      )
      .then(() => {
        setLoading(false)
        navigate('/blogs')
      })
      .catch((error) => {
        alert('Something went wrong')
        console.log(error);
      })
  }
  return (
    <div className="container my-5">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className='mb-5'>Create Blog Post</h3>
          <Form {...blog} uImg={uImg} handleSubmit={handleSubmit} handleChange={handleChange} handleThumbnailChange={handleThumbnailChange} error={error} />
        </>
      )}
    </div>
  )
}

export default CreateBlog
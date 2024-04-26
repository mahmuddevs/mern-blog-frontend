import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import { Link } from 'react-router-dom';
import { FaPen, FaInfo, FaTrash } from "react-icons/fa6";
import DeletePopup from '../../components/DeletePopup';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  const [remove,setRemove] = useState(false)
  const [deletableID,setDeletableID] = useState('')

  const handleRemove = (id) => {
    setDeletableID(id)
    setRemove(true)
  }

  const getStatus = (val) => {
    setRemove(val)
  }

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:3000/blogs/show-blogs')
      .then((res) => {
        setBlogs(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

  }, [remove])

  return (
    <div className="container">
      {remove?(
        <DeletePopup getStatus={getStatus} remove={remove} id={deletableID}/>
        ):''
      }
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Content</th>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {
                  blogs.map((blog, index) => {
                    return (
                      <tr key={blog._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{blog.title}</td>
                        <td>{blog.author}</td>
                        <td>{blog.content.substring(0, 15)}...</td>
                        <td><img src={`http://localhost:3000/uploads/blogs/${blog.postThumbnail}`} alt={blog.postThumbnail} height={100} width={100}/></td>
                        <td>
                          <Link to={`/show-blog/${blog._id}`}>
                            <FaInfo className='text-danger' />
                          </Link>
                          <Link to={`/edit-blog/${blog._id}`}>
                            <FaPen className='text-success ms-3' />
                          </Link>
                          <Link to='#'>
                            <FaTrash className='text-danger  ms-3' onClick={(e) => {
                              handleRemove(blog._id)
                            }}/>
                          </Link>
                        </td>
                      </tr>
                    )

                  })
                }
              </tbody>
            </table>
          </div></>
      )
      }
    </div>
  )
}

export default Blogs
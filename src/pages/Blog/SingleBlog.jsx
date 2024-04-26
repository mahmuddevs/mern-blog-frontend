import axios from 'axios'
import React from 'react'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

const SingleBlog = () => {
  const [blog, setBLog] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:3000/blogs/show-blog/${id}`)
      .then((res) => {
        setBLog(res.data)
        setLoading(false)
      })
      .catch((error) => {
        alert('Something Went Wrong')
        console.log(error);
      })
  }, [])
  const created = moment(blog.createdAt).format("MMM Do YY");
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <article>
              <img loading="lazy" decoding="async" src={`http://localhost:3000/uploads/blogs/${blog.postThumbnail}`} alt="Post Thumbnail" className="w-100" />
              <ul className="post-meta mb-2 mt-4">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{marginRight:"5px",marginTop:'-4px'}} className="text-dark" viewBox="0 0 16 16">
                    <path d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                  </svg> <span>{created}</span>
                </li>
              </ul>
              <h1 className="my-3">{blog.title}</h1>
              <h4 className="my-3">{blog.author}</h4>
              <ul className="post-meta mb-4">
                <li> <a href="/categories/#">destination</a>
                </li>
              </ul>
              <div className="content text-left">
                <div>{blog.content}</div>
              </div>
            </article>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default SingleBlog
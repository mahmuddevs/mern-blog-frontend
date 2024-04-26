import { Articles } from '../components//Articles';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import axios from 'axios';
import React, { useState,useEffect } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

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

  }, [])

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="row no-gutters-lg">
            <div className="col-12">
              <h2 className="section-title">Latest Articles</h2>
            </div>
            {loading?(
              <Spinner />
            ):<Articles blogs={blogs}/>}
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
import React from "react";
import { Link } from "react-router-dom";
export function Articles(props) {
  const { blogs } = { ...props }
  return (
    <div className="col-lg-8 mb-5 mb-lg-0">
      <div className="row">
        {blogs.map((blog, index) => {
          return <>
            <div key={blog._id} className={`${index==0?"col-12":"col-6"} mb-4`}>
              <article className="card article-card">
                <Link to={`/show-blog/${blog._id}`}>
                  <div className="card-image">
                    <div className="post-info"> <span className="text-uppercase">04 Jun 2021</span>
                      <span className="text-uppercase">3 minutes read</span>
                    </div>
                    <img loading="lazy" decoding="async" src={`http://localhost:3000/uploads/blogs/${blog.postThumbnail}`} alt="Post Thumbnail" className="w-100" />
                  </div>
                </Link>
                <div className="card-body px-0 pb-1">
                  <ul className="post-meta mb-2">
                    <li> <a href="#!">travel</a>
                      <a href="#!">news</a>
                    </li>
                  </ul>
                  <h2 className="h1"><Link className="post-title" to={`/show-blog/${blog._id}`}>{blog.title}</Link></h2>
                  <p className="card-text">{blog.content}</p>
                  <div className="content"> <Link className="read-more-btn" to={`/show-blog/${blog._id}`}>Read Full Article</Link>
                  </div>
                </div>
              </article>
            </div>
          </>
        })}

        
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <nav className="mt-4">
                <nav className="mb-md-50">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#!" aria-label="Pagination Arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                      </a>
                    </li>
                    <li className="page-item active "> <a href="index.html" className="page-link">
                      1
                    </a>
                    </li>
                    <li className="page-item"> <a href="#!" className="page-link">
                      2
                    </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!" aria-label="Pagination Arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

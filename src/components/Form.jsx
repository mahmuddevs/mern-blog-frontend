import React from 'react'

const Form = (props) => {
    const { title, author, content, postThumbnail, uImg, handleChange, handleSubmit, handleThumbnailChange, error } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" id="title" placeholder="Enter Blog Title" onChange={handleChange} value={title} />
                {error && !title && <span className='text-danger'>Enter title</span>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="author">Author Name</label>
                <input type="text" className="form-control" name="author" id="author" placeholder="Write Your Name" onChange={handleChange} value={author} />
                {error && !author && <span className='text-danger'>Enter author</span>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" name="content" id="content" placeholder="Start Writing Your Blog Here" onChange={handleChange} value={content} />
                {error && !content && <span className='text-danger'>Enter content</span>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="formFile" className="form-label">Post thumbnail</label>
                {}
                {uImg ? <img src={uImg} className='d-block mb-3' height={100} width={100}/> :postThumbnail?<img src={`http://localhost:3000/uploads/blogs/${postThumbnail}`} className='d-block mb-3' height={100} width={100}/>:""}
                <input className="form-control" name='postThumbnail' type="file" id="formFile" onChange={handleThumbnailChange}/>
            </div>
            <div className="form-group mb-3">
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

export default Form
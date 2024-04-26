import axios from 'axios'
import React, { useState } from 'react'


const DeletePopup = (props) => {
    const handleActive = () => {
        props.getStatus(false)
    }
    const deleteBlog = () => {
        axios
            .delete(`http://localhost:3000/blogs/delete-blog/${props.id}`)
            .then(() => { 
                props.getStatus(false)
                console.log('deleted'); })
            .catch((error) => { console.log(error);})
    }

    return (
        <div className={`container d-flex justify-content-center position-absolute mt-5`}>
            <div className='border rounded border-dark border-2 p-4 bg-light' style={{width:'320px'}}>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h5 >Confirm Delete</h5>
                        <div style={{ border: '1px solid black', padding: '0px 8px 4px 8px', cursor: 'pointer' }} onClick={handleActive}>
                            <span>&times;</span>
                        </div>
                    </div>
                    <div>
                        <p>Are You Sure?</p>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger me-3" onClick={deleteBlog}>Delete</button>
                        <button type="button" className="btn btn-success" onClick={handleActive}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup
import axios from 'axios'
import React, { useState } from 'react'

const CreateGallary = () => {
    // const [img, setImg] = useState({
    //     image: ''
    // })
    // const [pImg, setPImg] = useState()

    // const handleImgUpload = (e) => {
    //     if (e.target.files[0]) {
    //         setPImg(URL.createObjectURL(e.target.files[0]))
    //     }
    //     setImg({ ...img, [e.target.name]: e.target.files[0] })
    // }
    // const handleUpload = (e) => {
    //     e.preventDefault()
    //     if (!img.image) {
    //         console.log("No image selected");
    //     }
    //     axios
    //         .post('http://localhost:3000/gallery/add-images',
    //             img,
    //             {
    //                 headers: { "Content-Type": "multipart/form-data" }
    //             })
    //         .then(() => {
    //             console.log("upload successful")
    //         })
    //         .catch((error) => {
    //             console.log("upload failed")
    //             console.log(error)
    //         })
    // }

    //single upload ends

    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (e) => {
        setSelectedFiles([...selectedFiles, ...e.target.files]);
    };
    const handleMultiUpload = (e) => {
        e.preventDefault()
        // if (!selectedFiles) {
        //     console.log("No image selected");
        // }
        axios
            .post('http://localhost:3000/gallery/add-images',
            selectedFiles,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                })
            .then(() => {
                console.log("upload successful")
            })
            .catch((error) => {
                console.log("upload failed")
                console.log(error)
            })

    };

    console.log(selectedFiles);

    return (
        <div className='container'>
            <div className="row">
                {/* <div className="col-6 mx-auto my-5">
                    <form action="" onSubmit={handleUpload}>
                        <div className="input-group">
                            <input type="file" name='image' className="form-control" id="formImgSingle" aria-describedby="formImg" aria-label="Upload" onChange={handleImgUpload} />
                            <button className="btn btn-outline-secondary" type="submit">Upload</button>
                        </div>
                    </form>
                    {pImg ? <img src={pImg} className='mt-3' style={{ height: '100px', width: '100px' }} /> : ''}
                </div> */}
                <div className="col-6 mx-auto my-5">
                    <form onSubmit={handleMultiUpload}>
                        <div className="input-group">
                            <input type="file" name='images' multiple className="form-control" id="formImgSingle" aria-describedby="formImg" aria-label="Upload" onChange={handleFileChange} />
                            <button className="btn btn-outline-secondary" type="submit">Upload</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateGallary
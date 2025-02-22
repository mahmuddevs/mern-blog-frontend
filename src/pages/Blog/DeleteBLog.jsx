import React from 'react'


const DeleteBLog = () => {
  return (
    <>
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are You Sure?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger">Delete</button>
              <button type="button" className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteBLog
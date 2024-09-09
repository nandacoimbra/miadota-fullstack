import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading-component">
            <div className="spinner-border text-secondary loading" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    )
}

export default Loading

import React from 'react'
import "./style.css"

export default function Loading() {
    return (
        <div className="loadingContainer">
            <div class="d-flex justify-content-center">
            <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>
        
    )
}

import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <div className="error">
                <div className="main">
                    <h1>Page not found</h1>
                    <p>Join to our partners, read author's analytics, explore the world of trading </p>
                    <Link to="/">
                        <button>Main page<svg width="69" height="51" viewBox="0 0 69 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="43.6797" cy="25.2891" r="24.9844" transform="rotate(-90 43.6797 25.2891)" stroke="white" stroke-width="0.609375" />
                            <path d="M1.34375 25.2894L49.5237 25.2894M49.5237 25.2894L42.9537 18.7194M49.5237 25.2894L42.9537 31.8594" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

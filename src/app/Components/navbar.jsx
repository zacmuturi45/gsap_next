import React from 'react'
import "../css/index.css"
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='nav_main'>
            <div className="nav_container">

                <div className='nav_one'>
                    <Link href={"/"} className='next-link nav_one_link'>Home</Link>
                </div>

                <div className='nav_two'>
                    <p>Collection</p>
                    <div className="nav_two_links">
                        <Link href={"/animation_one"} className="next-link nav_two_links_link">Inertia Plugin</Link>

                    </div>
                </div>

                <div className='nav_three'>
                    <button>Explore</button>
                </div>

            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './BottomBar.css';

function BottomBar() {
  return (
    <>
        <div className="bottom-bar">
            <div className="copyright">
                <div className="made-by">
                    <i class="fa-sharp fa-regular fa-copyright fa-xs"></i>            
                    &nbsp;2023 by Chloe Lau
                </div>
            </div>
            <div className="links">
                <Link to='/'>Contact</Link>
            </div>
        </div>
    </>
  )
}

export default BottomBar

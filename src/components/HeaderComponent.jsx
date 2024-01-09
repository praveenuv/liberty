import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
         <header>
            <nav className='navbar navbar-dark bg-dark'>
            <marquee class="marq" bgcolor="Green" 
                 direction="left" loop=""> 
            <a className="navbar-brand" href="#"><h2>LIBERTY YOUTH ASSOCIATION</h2></a>
            </marquee>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
import React from 'react'

export default function Header() {
  return (
    <>
    <header class="header">
        <div class="logo">
            <a href="">LOGO</a>
        </div>
        <nav>
            <ul class="nav_list">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

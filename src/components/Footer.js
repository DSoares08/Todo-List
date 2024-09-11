import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center items-center gap-5 py-3'>
      <a href="https://www.instagram.com/dsoares_05/" target="_bl">
        <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
      <a href="https://www.linkedin.com/in/diogo-soares-b7a845235/" target="_bl">
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
      <a href="https://github.com/DSoares08" target="_bl">
        <i className="fa-brands fa-github-alt duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
    </div>
  )
}


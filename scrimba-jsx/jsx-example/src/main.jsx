import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const navbar = (
  <nav>
    <h1>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </h1>
  </nav>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  navbar,
)

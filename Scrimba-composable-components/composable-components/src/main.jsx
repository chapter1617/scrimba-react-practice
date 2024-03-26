import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function MyList(){
  return (
    <div>
      <header>
        <nav>
        <img src="./react-logo.png" className="logo react" alt="React logo" width="40px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
      <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
      </ol>
      <footer>© 2024 mvcreative web development. All rights reserved.</footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyList/>,
)

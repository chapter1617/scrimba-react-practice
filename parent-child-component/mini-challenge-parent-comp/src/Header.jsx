import logo from './react-logo.png'

function Header(){
    return (
        <div>
              <header>
                  <nav className="nav">
                      <img src={logo} className="nav-logo" />
                      <ul className='nav-items'>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                      </ul>
                  </nav>
              </header>
        </div>
    )
}

export default Header
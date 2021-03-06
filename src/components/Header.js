import earth from '../images/earth.png'

function Header() {
  return (
    <header className="header">
      <img 
        className="header--logo"
        src={ earth }
        alt="Planet Earth icon"
      />
      <h1 className="header--heading">my travel journal.</h1>
    </header>
  )
}

export default Header
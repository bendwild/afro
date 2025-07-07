import { QuartzComponent, QuartzComponentConstructor } from "../types"

const CustomNavbar: QuartzComponent = () => {
  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img
              src="https://raw.githubusercontent.com/bendwild/afromedica/v4/content/Extra/Images/afromedica%20(6).png"
              alt="AfroMedica Logo"
            />
          </a>
        </div>
        <ul className="nav-menu">
          <li><a href="/en/" className="nav-link">Home</a></li>
          <li><a href="/en/about" className="nav-link">About Us</a></li>
          <li><a href="/en/afrocademy" className="nav-link">Afrocademy</a></li>
          <li><a href="/en/projects" className="nav-link">Projects</a></li>
          <li><a href="/en/team" className="nav-link">Team</a></li>
          <li><a href="/en/contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="language-switcher">
          <a href="/en/" className="lang-link">EN</a>
          <a href="/fr/" className="lang-link">FR</a>
        </div>
      </div>
    </nav>
  )
}

export default (() => CustomNavbar) satisfies QuartzComponentConstructor

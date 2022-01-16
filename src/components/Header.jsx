import logo from '../logo.svg';
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" className="nav-logo" />
        <h1>ReactFacts</h1>
        <h3>React course - Project 1</h3>
      </nav>
    </header>
  )
}

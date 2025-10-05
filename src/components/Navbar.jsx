import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Mag-Eric Ventures</div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="icons">
          <span className="cart">🛒</span>

          {/* Mobile Menu Button */}
          <div 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

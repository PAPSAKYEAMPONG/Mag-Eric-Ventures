import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Mag-Eric Ventures</div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="#">Categories</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>

        <div className="icons">
          <Link to="/cart" className="cart">🛒</Link>

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
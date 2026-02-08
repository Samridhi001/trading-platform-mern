import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <h2 style={styles.logo}>TradePlatform</h2>

        {/* Navigation Links */}
        <ul style={styles.navLinks}>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    color: "#387ed1",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
  },
};

export default Navbar;

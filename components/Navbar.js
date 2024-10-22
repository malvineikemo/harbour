import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links"> {/* Left section for Home, About, Services */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>
      <div className="account-section"> {/* Right section for login/logout */}
        <Link href="/login">
          Login
        </Link> 
        {' | '}
        <Link href="/account">
          Account
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

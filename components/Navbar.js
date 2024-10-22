import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="top-nav">
            <nav className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div className="right-section">
                <a href="#login">Login</a> / 
                <a href="#signup">Sign Up</a> | 
                <a href="#account">Account</a>
            </div>
        </header>
    );
};

export default Navbar;

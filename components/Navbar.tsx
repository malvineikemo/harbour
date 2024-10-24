import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex space-x-4">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/login">Log In</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/account">Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;

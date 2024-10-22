import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li><Link href="/category1">Category 1</Link></li>
        <li><Link href="/category2">Category 2</Link></li>
        <li><Link href="/category3">Category 3</Link></li>
      </ul>
      <div className="motd">
        <p>MOTD: This is your message of the day!</p>
      </div>
    </div>
  );
};

export default Sidebar;

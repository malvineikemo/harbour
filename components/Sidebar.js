import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="side-menu">
            <h3>Categories</h3>
            <ul>
                <li><Link href="/category1">Category 1</Link>
                    <ul>
                        <li><Link href="/subcategory1-1">Subcategory 1.1</Link></li>
                        <li><Link href="/subcategory1-2">Subcategory 1.2</Link></li>
                    </ul>
                </li>
                <li><Link href="/category2">Category 2</Link>
                    <ul>
                        <li><Link href="/subcategory2-1">Subcategory 2.1</Link></li>
                        <li><Link href="/subcategory2-2">Subcategory 2.2</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="motd">
                <p><strong>MOTD:</strong> Welcome to our site! Have a great day!</p>
            </div>
        </aside>
    );
};

export default Sidebar;

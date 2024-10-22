import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;

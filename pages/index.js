import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent>
        <h1>Welcome to the Home Page</h1>
        <p>This is your main content area. Content from .md files will show up here.</p>
      </MainContent>
    </>
  );
};

export default HomePage;

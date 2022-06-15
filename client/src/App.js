import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import List from "./components/List";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from './components/NewsLetter';
import BrowseBy from './components/BrowseBy';
import HomeGuestLove from './components/HomeGuestsLove';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><BrowseBy /><HomeGuestLove /><NewsLetter /></>}></Route>
        <Route path="/hotels" element={<div><List /></div>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

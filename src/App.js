import { Box } from '@chakra-ui/react'
import Gallery from './Components/Gallery/Gallery';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Search/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;

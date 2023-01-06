import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import Beranda from './components/beranda/Beranda';
import Tentang from './components/tentang/Tentang';
import Porto from './components/porto/Porto';
import Kontak from './components/kontak/Kontak';

function App() {
  return (
  <>  
    <Nav />
    <Beranda />
    <Tentang />
    <Porto />
    <Kontak/>
  </>  
  )
}

export default App;

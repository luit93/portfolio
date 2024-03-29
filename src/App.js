import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'
import Page from './components/Page';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='Page' element={<Page/>}/>

      </Route>
     </Routes>
    </div>
  );
}

export default App;

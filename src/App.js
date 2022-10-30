import logo from './logo.svg';
// import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },

    {
      path: '/contact',
      element: <Contact/>
    },

    {
      path: '/portfolio',
      element: <Portfolio/>
    },
    {
      path: '/about',
      element: <About/>
    },

  ])

  return (

    <div>
      <Router basename='/'/>
    </div>
  );
}

export default App;

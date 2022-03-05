import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import Carousel from './components/Carousel';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  };
  render() {
    return (
      <>
        <div>
          {
            <Container maxWidth="xl">
              <Carousel
                className='carousel' />
              <h1 className='title'>
                20 Greatest Recipes for Your Army to March On
              </h1>
            </Container>
          }

          <Box sx={{ width: '100%' }}>

            <nav className='navbar'>
              <ul >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Recipe Categories</Link>
                </li>
                <li>
                  <Link to="/information">About</Link>
                </li>
              </ul>
            </nav>
          </Box>
        </div>

        <Routes>
          <Route exact path="/" element={
            <Container maxWidth="sm">
              <HomeView
              />
            </Container>
          }
          />

          <Route exact path="/categories" element={
            <Container maxWidth="sm">
              <CategoryView
              />
            </Container>
          }
          />

        </Routes>
      </>
    )
  };
}

export default App;

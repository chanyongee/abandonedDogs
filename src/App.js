import './styles.css';
import React from 'react';
import { ContextProvider } from './Context.js';
import DropDownBar from './DropDownBar';
import CardWrapper from './CardWrapper';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">유기동물 조회하기</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#!">All Products</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                          <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                      </ul>
                  </li>
              </ul> */}
              {/* <form className="d-flex">
                  <button className="btn btn-outline-dark" type="submit">
                      <i className="bi-cart-fill me-1"></i>
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>
              </form> */}
          </div>
      </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">유기동물 조회하기</h1>
            <p className="lead fw-normal text-white-50 mb-0">사지 마세요, 입양하세요.</p>
          </div>
        </div>
      </header>

      <div style={{'textAlign': 'center'}}>
        <ContextProvider>
          <DropDownBar></DropDownBar>
          <CardWrapper></CardWrapper>
        </ContextProvider>

      </div>
      
      <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
      </footer>
    </>
  );
}

export default App;

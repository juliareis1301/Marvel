import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../Imagens/marvel-logo.png';
import './NavBar.css';
import Search from '../Search/Search';
import api from '../../../../api/api';
import CardContainer from "../CardContainer/CardContainer";
import { Routes, Route, } from 'react-router-dom';
import ComicsPage from "../../../Comics/ComicsPage";
import SeriesPage from "../../../SeriesPage/SeriesPage";



const NavBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsComics, setResultsComics] = useState("");
  const [resultsSeries, setResultsSeries] = useState("");

  useEffect(() => {
    if (search === "") {
      setResultsComics([]); // Limpa os resultados se a pesquisa estiver vazia
    } else {
      api
      .get(`/series?titleStartsWith=${search}`)
      .then((response) => {
          setResultsSeries(response.data.data.results);
        })
      .catch((err) => console.log(err));
    }
  }, [search]);


  useEffect(() => {
    if (search === "") {
      setResultsComics([]); // Limpa os resultados se a pesquisa estiver vazia
    } else {
      api
      .get(`/comics?titleStartsWith=${search}`)
      .then((response) => {
          setResultsComics(response.data.data.results);
        })
      .catch((err) => console.log(err));
    }
  }, [search]);


  useEffect(() => {
    if (search === "") {
      setResults([]); // Limpa os resultados se a pesquisa estiver vazia
    } else {
      api
      .get(`/characters?nameStartsWith=${search}`)
      .then((response) => {
          setResults(response.data.data.results);
        })
      .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <div>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container fluid>
          <img alt="logo" src={logo} width={120} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav className="nav_link">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/characters">Characters</Nav.Link>
                <Nav.Link href="/comics">Comics</Nav.Link>
                <Nav.Link href="series">Series</Nav.Link>
              </Nav>
            </Nav>
            <Search searched={setSearch} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/characters" element={<CardContainer characters={results} />} />
        <Route path="/comics" element={<ComicsPage  comics={resultsComics} />}/>
        <Route path="/series" element={<SeriesPage series={resultsSeries}/>}/>
      </Routes>

    </div>

  );
}

export default NavBar;

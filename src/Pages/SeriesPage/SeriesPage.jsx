import React, { useEffect, useState, useCallback } from "react";
import './SeriesPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api from '../../../src/api/api';


const SeriesPage = ({ series }) => {

  const [searchedSeries, setSearchedSeries] = useState([])

  useEffect(() => {
    if (series && series.length > 0) {
      setSearchedSeries(series);
    } else {
      fetchAllSeries();
    }
  },[series])


  const fetchAllSeries = useCallback(async () => {
    try {
      const response = await api.get('series');
      setSearchedSeries(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = searchedSeries.length;
      const response = await api.get('series', {
        params: {
          offset,
        },
      });

      setSearchedSeries(prevSeries => [...prevSeries, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [searchedSeries]);

  console.log(searchedSeries)

  return(
    <div>
    <h1 className='title-series'>Meet the Marvel Series</h1>
      <div className='series-container'>
        {searchedSeries.map(serie => (
          <Card key={serie.id} style={{ width: '18rem' }}>
            <Card.Img
              variant= "top"
              src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              alt="series"
              className='series-image'
            />
            <Card.Body style={{ backgroundColor: '#505050' }}>
              <Card.Title style={{ color: '#FFFF'}}>{serie.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="d-grid gap-2">
        <Button className='ver_mais' variant="danger" size="lg" onClick={handleMore}>
          Ver mais
        </Button>
      </div>
  </div>
  )
}

export default SeriesPage
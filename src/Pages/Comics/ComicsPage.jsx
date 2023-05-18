import React, { useEffect, useState, useCallback } from 'react';
import './ComicsPage.css';
import Card from 'react-bootstrap/Card';
import api from '../../../src/api/api';
import Button from 'react-bootstrap/Button';

const ComicsPage = ( { comics }) => {
  const [SearchedComics, setSearchedComics] = useState([]);

  useEffect(() => {
    if (comics && comics.length > 0) {
      setSearchedComics(comics);
    } else {
      fetchAllComics();
    }
  }, [comics]);

  const fetchAllComics = useCallback(async () => {
    try {
      const response = await api.get('comics');
      setSearchedComics(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);


  const handleMore = useCallback(async () => {
    try {
      const offset = SearchedComics.length;
      const response = await api.get('comics', {
        params: {
          offset,
        },
      });

      setSearchedComics(prevComics => [...prevComics, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [SearchedComics]);

  return (
    <div>
      <h1 className='title-characters'>Meet the Marvel Comics</h1>
      <div className='comic-container'>
        {SearchedComics.map(comic => (
          <Card key={comic.id} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt="comics"
              className='comic-img'
            />
            <Card.Body style={{ backgroundColor: '#505050' }}>
              <Card.Title style={{ color: '#FFFF' }}>{comic.title}</Card.Title>
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
  );
};

export default ComicsPage;

import React, { useEffect, useState, useCallback } from 'react';
import './CardContainer.css';
import Card from 'react-bootstrap/Card';
import api from '../../../../api/api';
import Button from 'react-bootstrap/Button';



const CardContainer = ({ characters }) => {
  const [searchedCharacters, setSearchedCharacters] = useState([]);



  const fetchAllCharacters = useCallback(async () => {
    try {
      const response = await api.get('characters');
      setSearchedCharacters(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []); 
  
  useEffect(() => {
    if (characters && characters.length > 0) {
      setSearchedCharacters(characters);
    } else {
      fetchAllCharacters();
    }
  }, [characters, fetchAllCharacters] );


  const handleMore = useCallback(async () => {
    try {
      const offset = searchedCharacters.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });
      setSearchedCharacters(prevCharacters => [...prevCharacters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [searchedCharacters]);

  return (
    <div>
      <h1 className='title'>Meet the Marvel Characters</h1>
        <div className='card-container'>
          {searchedCharacters.map(character => (
            <Card key={character.id} style={{ width: '15rem' }}>
              <Card.Img
                variant= "top"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="personagem"
                className='card-image'
              />
              <Card.Body style={{ backgroundColor: '#505050' }}>
                <Card.Title style={{ color: '#FFFF'}}>{character.name}</Card.Title>
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
}

export default CardContainer;

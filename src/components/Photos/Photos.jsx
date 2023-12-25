import React from 'react';
import './Photos.scss';

function Collection({ name, images }) {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

function Photos() {
  const [categories, setCategories] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);
  
  React.useEffect(() => { 
    fetch('https://65893844324d41715258975f.mockapi.io/react/photos/photos')
    .then((res) => res.json())
    .then((json) => {
      setCollections(json[0]["collections"])
      setCategories(json[0]["categories"])
    })
    .catch((err) => {
      console.warn(err);
      alert('Ошибка при получении данных')
    })
  }, []);

  return (
    <div className="Photos">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            categories.map((obj) => (
              <li key={obj.name}>{obj.name}</li>
            ))
          }
        </ul>
        <input value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {
          collections
          .filter((obj) => {
            return obj.name.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((obj, index) => (
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}/>
          ))
        }
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default Photos;
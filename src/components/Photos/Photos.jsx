import React from 'react';
import './Photos.scss';

const cats = [
  {
    "name": "Все"
  },
  {
    "name": "Море"
  },
  {
    "name": "Горы"
  },
  {
    "name": "Архитектура"
  },
  {
    "name": "Города"
  }
]

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
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);
  
  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : '';

    fetch(`https://65893844324d41715258975f.mockapi.io/react/photos/photos?page=${page}&limit=3&${category}`)
    .then((res) => res.json())
    .then((json) => {
      setCollections(json)
    })
    .catch((err) => {
      console.warn(err);
      alert('Ошибка при получении данных')
    }).finally(() => setIsLoading(false))
  }, [categoryId, page]);

  return (
    <div className="Photos">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            cats.map((obj, i) => (
              <li
                onClick={() => {
                  setCategoryId(i)
                }}
                className={categoryId === i ? 'active' : ''}
                key={obj.name}>
                {obj.name}</li>
            ))
          }
        </ul>
        <input value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {isLoading ? (
            <h2>Идёт загрузка ...</h2>
          ) : (
            collections.filter((obj) => {
              return obj.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((obj, index) => (
              <Collection
                key={index}
                name={obj.name}
                images={obj.photos}/>))
          )
        }
      </div>
      <ul className="pagination">
        {
          [... Array(5)].map((el, i) => (
            <li onClick={() => setPage(i + 1)}
                className={page === (i + 1) ? 'active' : ''}>
              {i + 1}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Photos;
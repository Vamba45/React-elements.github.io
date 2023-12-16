import React from "react";
import Skeleton from './Skeleton.jsx';
import User from './User.jsx';

import './Users.scss';

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then((json) => {
      setUsers(json.data);
      }).catch(err => {
      console.warn(err);
      console.log("Произошла ошибка при загрузке");
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  console.log(searchValue)

    return (
      <div className="Users">
        <div className="search">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <input type="text"
                  value={searchValue}
                  onChange={onChangeSearchValue}
                  placeholder="Найти пользователя..." />
        </div>
        {isLoading ? (
          <div className="skeleton-list">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <ul className="users-list">
            {
              users.
              filter((obj) => {
                const fullName = (obj.first_name + obj.last_name).toLowerCase();

                return fullName.includes(searchValue.toLowerCase()) || obj.email.includes(searchValue.toLocaleLowerCase());
              }).map((obj) => (
                <User key={obj.id} {...obj}/>
              ))
            }
          </ul>
        )}
        <button className="send-invite-btn">Отправить приглашение</button>
      </div>
    );
  };
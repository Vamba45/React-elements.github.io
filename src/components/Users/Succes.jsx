import React from 'react';

export default function Success ({ count }) {
  return (
    <div class="success-block">
      <img src="./assets/img/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
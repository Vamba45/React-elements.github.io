import './Quiz.scss';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function Result() {
    <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали 3 ответа из 10</h2>
        <button>Попробовать снова</button>
    </div>
}

export default function Quiz() {
    return (
        <div className='Quiz'>
            <div className="progress">
                <div style={{ }} className="progress__inner"></div>
            </div>
            <h1>Что такое useState?</h1>
            <ul>
                <li>Это функция для хранения данных компонента</li>
                <li>Это глобальный стейт</li>
                <li>Это когда на ты никому не нужен</li>
            </ul>
        </div>
    );
}
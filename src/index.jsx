import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

/* Components */
import Counter from './components/Counter/Counter.tsx';
import ModalWindow from './components/ModalWindow/ModalWindow.jsx';
import Users from './components/Users/Users.jsx';
import Success from './components/Users/Succes.jsx';

/* Styles */
import './styles/index.scss';
import Quiz from './components/Quiz/Quiz.jsx';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);

function Main({ children }) {
    return (
            <div className='main'>
                <p>
                    Этот репозиторий посвящён изучению 
                    основ React и созданию 
                    частоиспользуемых на html страницах 
                    элементов
                </p>
            </div>
        )
}

function Nav() {
    return (
    <>
        <div id="btnNav" 
            onClick={() => {
            btnNav.classList.toggle('active')
            navBtn.classList.toggle('active')
            document.querySelector('nav').classList.toggle('active')}}>
            <div className='horizont'></div>
            <div className='horizont'></div>
            <div className='horizont'></div>
        </div>
        <nav>
            <div id="navBtn" onClick={
                () => {
                    navBtn.classList.toggle('active')
                    btnNav.classList.toggle('active')
                    document.querySelector('nav').classList.toggle('active')}}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <Link to="/">Главная</Link>  
            <Link to="/counter">Счётчик</Link>  
            <Link to="/modal">Модальное окно</Link>
            <Link to="/quiz">Опросник</Link>
            <Link to="/users">Список пользователей</Link>
        </nav>
    </>)
}

// рендеринг в корневой элемент
root.render(
    <Router>
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={
                        <Main>
                        </Main>
                    } />
                <Route path="/counter" element={<Counter />} />
                <Route path="/modal" element={<ModalWindow />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/users" element={
                    <>
                        <Users isLoading={true}/>
                    </>
                } />
            </Routes>
        </div>
    </Router>
);
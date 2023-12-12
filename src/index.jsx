import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

/* Components */
import Counter from './components/Counter/Counter';
import ModalWindow from './components/ModalWindow/ModalWindow.jsx';

/* Styles */
import './styles/style.scss';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);

function Main({ children }) {
    return (
            <>
                <h1>It's main</h1>
                {children}
            </>
        )
}

function About() {
    return <h2>About</h2>
}

function NotFound(){
    return <h2>Ресурс не найден</h2>;
}
{/* <>
        <ModalWindow/>
        <Counter/>
    </> */}

    function Nav() {
        return (<nav>
                    <Link to="/">Главная</Link>  
                    <Link to="/counter">Счётчик</Link>  
                    <Link to="/modal">Модальное окно</Link>
                </nav>)
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
            </Routes>
        </div>
    </Router>
);
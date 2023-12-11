import './Counter.scss';

function Counter() {
    return (
        <div className="counter">
            <h2>Счётчик:</h2>
            <h1>0</h1>
            <div className="btns">
                <button className='decr btn'>- Минус</button>
                <button className='incr btn'>Плюс +</button>
            </div>
        </div>
    )
}

export default Counter;
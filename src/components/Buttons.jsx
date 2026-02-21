import '../styles/Button.css';
import moveDown from '../assets/movedown.svg';
import moveUp from '../assets/moveup.svg';
import resetBtn from '../assets/reset.svg';

function Buttons({increment, decrement, reset}){
    return (
        <div className="btn-container">
            <button
                title="Increment"
                className='btn'
                onClick={increment}
            >
                <img className="action-btn" src={moveUp} alt="increment" />
            </button>

            <button
                title="Decrement"
                className='btn'
                onClick={decrement}
            >
                <img className="action-btn" src={moveDown} alt="Decrement" />
            </button>

            <button
                title="Reset"
                className='btn'
                onClick={reset}
            >
                 <img className="action-btn" src={resetBtn} alt="Reset" />
            </button>
        </div>
    )
}

export default Buttons;
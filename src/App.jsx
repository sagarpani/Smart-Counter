import { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';
import './App.css';

function App() {
    const [value, setValue] = useState(0);

    const [showNotification, setShowNotification] = useState(false);

    const [inputValue, setInputValue] = useState('');


    function increment() {
        setValue(prev => {
            if (prev >= 99) {
                setShowNotification(true);
            }
            return (prev < 100 ? prev + 1 : prev);
        })
    }
    function decrement() {
        setValue(prev => (prev > 0 ? prev - 1 : prev))
    }
    function reset() {
        setValue(0);
    }

    function addInput() {
        setValue(prev => {
            const num = Number(inputValue);
            if (isNaN(num)) return prev;
            let tempChecker = (prev + num);
            if (tempChecker >= 100) {
                setShowNotification(true);
            }
            if (tempChecker < 0 || tempChecker > 100) return prev;
            else return tempChecker;
        });
        setInputValue('');
    }

    useEffect(() => {
        if (!showNotification) return;

        const timer = setTimeout(() => {
            setShowNotification(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [showNotification]);

    return (
        <div
            className="container"

        >
            {showNotification && <p className="Notification">You're exceeding the limit...</p>}

            <div className="wrapper">
        <div className="display">
                    <p className="display-value">{value.toString().padStart(2, '0')}</p>
                    
                </div>
                <p className="gothrough">Smart Counter</p>
            </div>
                
                
            

            <Buttons
                increment={increment}
                decrement={decrement}
                reset={reset}
            />
            <Input
                inputValue={inputValue}
                setInputValue={setInputValue}
                addInput={addInput}
            />
        </div>
    )
}

export default App;
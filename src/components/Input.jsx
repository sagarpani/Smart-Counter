import '../styles/Input.css';

function Input({inputValue ,setInputValue, addInput}) {
    
    return (
        <div className='input-container'>
            <input
                title="Step the count"
                placeholder='Add...'
                className='input-bar'
                type="number"
                onChange={(e)=>setInputValue((e.target.value))}
                value = {inputValue}
                onKeyDown={(e)=>{
                    if(e.key === "Enter") addInput();
                }}
            />
            <button
                title="Add"
                className='input-add-btn'
                onClick={addInput}
            >
                Add
            </button>
        </div>
    )
}

export default Input;
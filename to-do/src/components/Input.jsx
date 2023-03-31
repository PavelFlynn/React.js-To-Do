import { useState } from 'react';
import { TextField } from '@mui/material';

export default function Input(props) {

    const [inputValue, setinputValue] = useState('');
    const [idTodo, setIdTodo] = useState(3);

    function handleInput(event) {
        setinputValue(event.target.value);
    }

    // Add a new item to the List
    function addItem(event) {
        event.preventDefault();

        // Do not Add empty items
        if (inputValue.trim().length === 0) {
            return;
        }

        props.setItems([
            ...props.items, 
            {
                id: idTodo,
                title: inputValue,
                isCompleted: false
            }
        ]);

        setinputValue('');
        setIdTodo( prevIdTodo => prevIdTodo + 1 );
    }

    return (
        <div className='relative'>
            <form action='#' onSubmit={addItem}>
                <TextField 
                    onChange={handleInput}
                    id='outlined-basic'
                    value={inputValue}
                    label='What do you need to do?'
                    variant='outlined'
                    fullWidth
                />
            </form>
        </div>
    )
}

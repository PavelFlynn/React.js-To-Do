import { TextField } from '@mui/material'
import { useEffect, useRef } from 'react'

export default function UserInfo(props) {

    const nameInputEl = useRef(null);

    function handleNameInput(event) {
        props.setUserName(event.target.value);
        //localStorage.setItem('nameStorage', JSON.stringify(event.target.value)); ::: Moved to a custom Hook
    }

    useEffect( () => {
        nameInputEl.current.focus();
        //localStorage.clear(); :::: Testing
        //props.setUserName(JSON.parse(localStorage.getItem('nameStorage')) ?? ''); ::: Moved to a custom Hook
    }, []);

    return (
        <div className='relative'>
            <form action='#'>
                <TextField 
                    onChange={handleNameInput}
                    id='outlined-basic'
                    value={props.username}
                    label='What is your name?'
                    variant='outlined'
                    fullWidth
                    inputRef={nameInputEl}
                />
            </form>
        </div>
    )
}

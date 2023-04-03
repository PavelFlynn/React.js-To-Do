import { TextField } from '@mui/material'
import { useEffect, useRef } from 'react'

export default function UserInfo(props) {

    const nameInputEl = useRef(null);

    useEffect( () => {
        nameInputEl.current.focus();
    }, []);

    return (
        <div className='relative'>
            <form action='#'>
                <TextField 
                    onChange={ event => props.setUserName(event.target.value) }
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

import { useRef, useState } from 'react';
import { Checkbox, TextField } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function ListItem(props) {

    // To manage specific DOM node for CSSTransition component
    const animEl = useRef(null);

    // Checkbox for Completed Item
    function checkCompleteItem(id) {
        const updateItems = props.items.map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }

            return item;
        });

        props.setItems(updateItems);
    }

    // Set Edit mode for selected Item
    function setEditItem(id) {
        const editItems = props.items.map(item => {
            if (item.id === id) {
                item.isEdited = true;
            }

            return item;
        });

        props.setItems(editItems);
    }

    // Update Item from Edit mode
    function updateTitleItem(event, id) {
        const editItems = props.items.map(item => {
            if (item.id === id) {

                // Do not Add empty items
                if (event.target.value.trim().length === 0) {
                    item.isEdited = false;
                    return item;
                }

                item.title = event.target.value;
                item.isEdited = false;
            }

            return item;
        });

        props.setItems(editItems);
    }

    // Cancel Edit mode
    function cancelEditItem(id) {
        const editItems = props.items.map(item => {
            if (item.id === id) {
                item.isEdited = false;
            }

            return item;
        });

        props.setItems(editItems);
    }

    // Delete Item from List
    function deleteItem(id) {
        props.setItems([...props.items].filter(item => item.id !== id));
    }

    return (
        <div className='relative my-4'>

            <TransitionGroup component={null}>
            {props.itemFilterItems(props.itemFilter).map(item => (

            <CSSTransition
                key={item.id}
                nodeRef={animEl}
                classNames='slide-top'
                timeout={300}
            >
            <div className='relative flex justify-between items-center my-2' ref={animEl}>

                <div className='relative flex-grow-0 flex-shrink basis-11 text-cente'>
                    <Checkbox onChange={() => checkCompleteItem(item.id)} />
                </div>

                <div className='relative flex-1 px-1 text-left'>
                    {!item.isEdited ? (

                    <p 
                        onDoubleClick={() => setEditItem(item.id)}
                        className={`cursor-pointer ${item.isCompleted ? 'line-through' : null}`}>{item.title}
                    </p>

                    ) : (
                        
                    <TextField 
                        onBlur={(event) => updateTitleItem(event, item.id)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                updateTitleItem(event, item.id)
                            } else if (event.key === 'Escape') {
                                cancelEditItem(item.id)
                            }
                        }}
                        id='outlined-basic'
                        defaultValue={item.title}
                        label={item.title}
                        variant='outlined'
                        fullWidth
                        size='small'
                        autoFocus
                    />
                    )}
                </div>

                <div className='relative flex-grow-0 flex-shrink basis-8 text-cente'>
                    <ClearOutlinedIcon
                        onClick={() => deleteItem(item.id)}
                        sx={{
                            padding: '5px',
                            fontSize: '30px',
                            color: '#475569',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            opacity: 0.6,
                            '&:hover': {
                                opacity: 1
                            }
                        }}
                    />
                </div>
                
            </div>
            </CSSTransition>

            ))}
            </TransitionGroup>

        </div>
    )
}

import { Button, IconButton } from '@mui/material';
import { AutoFixHighOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useMemo } from 'react';
import useToggle from '../hooks/useToggle';

export default function ListCheck(props) {

    // Using and set custom Hooks
    const [setFeatureOne, setSetFeatureOne] = useToggle();

    // Check all items as completed
    function checkAllItems() {
        const checkAll = props.items.map(item => {
            item.isCompleted = true;
            return item;
        });

        props.setItems(checkAll);
    }

    // Check Items remaining for string legend
    function itemsRemaining() {
        const remaining = props.items.filter(item => item.isCompleted === false);
        return remaining.length;
    }
    // Runs only when Items change [this helps for slow components]
    const remaining = useMemo(itemsRemaining, [props.items]);

    return (
        <>
        {props.items.length > 0 ? (
        <div className='relative my-1 py-2 border-t border-solid border-slate-300'>
            <div className='relative flex justify-between items-center my-2'>

                <div>
                    <IconButton onClick={setSetFeatureOne} >
                        {setFeatureOne ? (
                        <VisibilityOffOutlined sx={{ fontSize: '20px', marginRight: '5px' }} />
                        ) : (
                        <VisibilityOutlined sx={{ fontSize: '20px', marginRight: '5px' }} />
                        )}
                    </IconButton>

                    {setFeatureOne && (
                    <Button 
                        onClick={checkAllItems}
                        variant='outlined' 
                        size='small'
                        sx={{ 
                            color: 'rgb(100 116 139)',
                            textTransform: 'capitalize',
                            borderRadius: '8px',
                            border: '1px solid rgb(148 163 184)'
                        }}
                    >
                        Check All
                    </Button>
                    )}

                </div>

                <div>
                    {remaining > 0 ? (
                    <p className='text-sm text-slate-500'>{remaining} {(remaining > 1) ? 'items' : 'item'} remaining</p>
                    ) : (
                    <p className='text-sm text-slate-500'>All tasks Completed!</p>
                    )}
                </div>

            </div>
        </div>
        
        ) : (

        <div className='relative m-1 py-4 text-center'>
            <AutoFixHighOutlined 
                sx={{
                    padding: '5px',
                    fontSize: '60px',
                    color: '#475569',
                    stroke: '#475569',
                    strokeWidth: 0.1,
                    opacity: 0.5,
                }}
            />
            <p className='text-sm text-slate-500'>Your day is free!. What about adding a new task...</p>
        </div>

        )}
        </>
    )
}

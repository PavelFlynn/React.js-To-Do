import { ButtonGroup, Button } from '@mui/material';

export default function ListControls(props) {

    // Clear completed Items from List
    function clearItems() {
        props.setItems([...props.items].filter(item => !item.isCompleted));
    }

    return (
        <>
        {props.items.length > 0 && (
        <div className='relative my-1 py-2 border-t border-solid border-slate-300'>
            <div className='relative flex justify-between items-center my-2'>

                <div>
                    <div className='relative flex justify-start items-center'>
                        <ButtonGroup 
                            variant='outlined' 
                            aria-label='outlined button group' 
                            size='small'
                        >
                            
                            <Button 
                                onClick={ () => props.setItemFilter('all') }
                                sx={{ 
                                    color: props.itemFilter === 'all' ? '#22c55e' : 'rgb(100 116 139)',
                                    textTransform: 'capitalize',
                                    border: '1px solid rgb(148 163 184)',
                                    borderRadius: '8px',
                                    borderColor: props.itemFilter === 'all' ? '#22c55e' : 'rgb(148 163 184)'
                                }}
                            >
                            All
                            </Button>

                            <Button 
                                onClick={ () => props.setItemFilter('active') }
                                sx={{ 
                                    color: props.itemFilter === 'active' ? '#22c55e' : 'rgb(100 116 139)',
                                    textTransform: 'capitalize',
                                    border: '1px solid rgb(148 163 184)',
                                    borderColor: props.itemFilter === 'active' ? '#22c55e' : 'rgb(148 163 184)'
                                }}
                            >
                            Active
                            </Button>

                            <Button 
                                onClick={ () => props.setItemFilter('completed') }
                                sx={{ 
                                    color: props.itemFilter === 'completed' ? '#22c55e' : 'rgb(100 116 139)',
                                    textTransform: 'capitalize',
                                    border: '1px solid rgb(148 163 184)',
                                    borderRadius: '8px',
                                    borderColor: props.itemFilter === 'completed' ? '#22c55e' : 'rgb(148 163 184)'
                                }}
                            >
                            Completed
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>

                <div>
                    <Button 
                        onClick={clearItems}
                        variant='outlined' 
                        size='small'
                        sx={{ 
                            color: 'rgb(100 116 139)',
                            textTransform: 'capitalize',
                            borderRadius: '8px',
                            border: '1px solid rgb(148 163 184)'
                        }}
                    >
                        Clear completed
                    </Button>
                </div>

            </div>
        </div>
        )}
        </>
    )
}

import { useState, useEffect } from 'react';
import { Header, UserInfo, Input, ListItem, ListCheck, ListControls } from './';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Layout() {

    const [name, setName] = useLocalStorage('name', '');
    
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Fist To do Item',
            isCompleted: false,
            isEdited: false
        },
        {
            id: 2,
            title: 'Second To do Item',
            isCompleted: false,
            isEdited: false
        },
    ]);

    // Set Filter for List Controls [All/Active/Completed]
    const [filter, setFilter] = useState('all');
    function filterItems(filter) {
        if (filter === 'active') {
            return todos.filter(item => !item.isCompleted);
        } else if (filter === 'completed') {
            return todos.filter(item => item.isCompleted);
        } else {
            return todos;
        }
    }
    
    return (
        <div className='relative flex flex-col justify-center items-center h-screen'>
            <div className='relative w-2/5 flex-grow-0 flex-shrink basis-auto p-8 bg-white rounded-lg shadow-md'>

                <Header label='Welcome!' />
                <UserInfo username={name} setUserName={setName} />

                <Header label='To Do App' username={name} />
                <Input items={todos} setItems={setTodos} />
                <ListItem items={todos} setItems={setTodos} itemFilter={filter} itemFilterItems={filterItems} />
                <ListCheck items={todos} setItems={setTodos} />
                <ListControls items={todos} setItems={setTodos} itemFilter={filter} setItemFilter={setFilter} />

            </div>
        </div>
    )
}

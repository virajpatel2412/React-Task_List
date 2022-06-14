import React from 'react'
import { useState } from 'react'
import './content.css'
import AddItem from './AddItem'

const obj = JSON.parse(localStorage.getItem('shopinglist'));
// console.log(obj)

export const Content = () => {

    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('shopinglist'))
        // [{
        //     id : 1,
        //     item : "Learn react",
        //     checked : false
        // }]
        
        );


    const [newItem, setNewItem] = useState('')


    const handleChange = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

        setItems(listItems);

        localStorage.setItem('shopinglist', JSON.stringify(listItems));
    }

    const deleteManage = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shopinglist', JSON.stringify(listItems))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newItem);
        if (!newItem)
            return;
        addItem(newItem);
        setNewItem('')
    }

    const addItem = (item) => {
        let id = 0;
        let listItems = null;
        if(obj == null || items.length == 0){
            id = 1;
            const myNewItem = { id, checked: false, item };
            listItems = [myNewItem];
        }
        else{
            id = items[items.length - 1].id + 1;
            const myNewItem = { id, checked: false, item };
            listItems = [...items, myNewItem];
        }
        
        setItems(listItems)
        localStorage.setItem('shopinglist', JSON.stringify(listItems))
        console.log("Added")
    }

    return (
        < div className = 'content_div'>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            {(obj != null || items.length == 0) ? (
                <ul className='grocerylist'>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type='checkbox'
                                checked={item.checked}
                                onChange={() => handleChange(item.id)} />


                            <label
                                onDoubleClick={() => handleChange(item.id)}
                                style={(item.checked) ? { textDecoration: "line-through" } : null}>
                                {item.item}
                            </label>

                            <button
                                onClick={() => deleteManage(item.id)}>
                                delete
                            </button>
                        </li>
                    ))
                    }
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is Empty</p>
            )
            }
        </div >
    )
}


export default Content
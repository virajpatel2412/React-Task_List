import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                type='text'
                className='addInput'
                placeholder='Add Item'
                required
                autoFocus
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
            >
                Add
            </button>
        </form>
    )
}

export default AddItem
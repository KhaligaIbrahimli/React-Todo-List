import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import "../src/assets/css/List.css"
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="ToDo-list">
      {items.map((item) => {
        const { id, title } = item 
        return (
          <article key={id} className="todo-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
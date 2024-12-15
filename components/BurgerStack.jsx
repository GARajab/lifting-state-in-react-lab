/* eslint-disable no-unused-vars */
import React from "react"
import "../src/App.css"
const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      <ul>
        {stack.map((ingredient) => (
          <li key={ingredient.id} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(ingredient)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerStack

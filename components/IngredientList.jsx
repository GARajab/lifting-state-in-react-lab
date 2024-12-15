/* eslint-disable no-unused-vars */
import React from "react"

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            style={{ backgroundColor: ingredient.color }}
            onClick={() => addToBurger(ingredient)} // Handle adding ingredient
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IngredientList

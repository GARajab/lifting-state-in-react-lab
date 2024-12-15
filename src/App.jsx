/* eslint-disable react-refresh/only-export-components */

/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import BurgerStack from "../components/BurgerStack"
import IngredientList from "../components/IngredientList"

import "./App.css"

export const availableIngredients = [
  { id: 1, name: "Kaiser Bun", color: "saddlebrown" },
  { id: 2, name: "Sesame Bun", color: "sandybrown" },
  { id: 3, name: "Gluten Free Bun", color: "peru" },
  { id: 4, name: "Lettuce Wrap", color: "olivedrab" },
  { id: 5, name: "Beef Patty", color: "#3F250B" },
  { id: 6, name: "Soy Patty", color: "#3F250B" },
  { id: 7, name: "Black Bean Patty", color: "#3F250B" },
  { id: 8, name: "Chicken Patty", color: "burlywood" },
  { id: 9, name: "Lettuce", color: "lawngreen" },
  { id: 10, name: "Tomato", color: "tomato" },
  { id: 11, name: "Bacon", color: "maroon" },
  { id: 12, name: "Onion", color: "lightyellow" },
  { id: 13, name: "Cheddar Cheese", color: "#FDE18B" },
  { id: 14, name: "Swiss Cheese", color: "#F1E1A8" },
]

const App = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient])
  }

  const removeFromBurger = (ingredientToRemove) => {
    setStack((prevStack) =>
      prevStack.filter((ingredient) => ingredient.id !== ingredientToRemove.id)
    )
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients} // Provide the ingredients data
          addToBurger={addToBurger}
        />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  )
}

export default App

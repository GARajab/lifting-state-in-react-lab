/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */

/* eslint-disable no-unused-vars */

import React, { useState } from "react"
import "./App.css"

const ZombieFighterComponent = ({ zombieFighter }) => {
  return (
    <div>
      <h3>{zombieFighter.name}</h3>
      <img src={zombieFighter.img} alt={zombieFighter.name} />
      <p>Price: {zombieFighter.price}</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
    </div>
  )
}
const MyTeamComponent = ({ team }) => {
  return (
    <div>
      <h3>{team?.name}</h3>
      <img src={team?.img} alt={team?.name} />
      <p>Price: {team?.price}</p>
      <p>Strength: {team?.strength}</p>
      <p>Agility: {team?.agility}</p>
    </div>
  )
}
let totalStrength = 0
let totalAgility = 0
const itemMoreThanOne = document.getElementById("itemMoreThanOne")
const App = () => {
  const [team, setTeam] = useState([])
  const [myTeam, setMyTeam] = useState([team])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ])

  const handleAddFighter = (zombieFighter) => {
    // Check if there's enough money to add the fighter

    if (money >= zombieFighter.price) {
      setTeam((prevTeam) => [...prevTeam, zombieFighter])
      setMoney((prevMoney) => prevMoney - zombieFighter.price)
      console.log(
        `${zombieFighter.name} added to team! Remaining money: ${
          money - zombieFighter.price
        }`
      )
      totalStrength = totalStrength + zombieFighter.strength
      totalAgility = totalAgility + zombieFighter.agility
      console.log(totalStrength)
    } else {
      console.log("Not enough money to add this fighter.")
    }
  }
  const removeMyTeamMembers = (removeMyTeamMember) => {
    // Check if there's enough money to add the fighter

    if (money >= handleAddMyTeamMember.price) {
      setTeam((prevTeam) => [...prevTeam, handleAddMyTeamMember])
      setMoney((prevMoney) => prevMoney - handleAddMyTeamMember.price)
      console.log(
        `${handleAddMyTeamMember.name} added to team! Remaining money: ${
          money - handleAddMyTeamMember.price
        }`
      )
    } else {
      console.log("Not enough money to add this fighter.")
    }
  }

  return (
    <>
      {team.length === 0 ? (
        <h1 id="itemMoreThanOne">Pick some team members!</h1>
      ) : (
        <>
          <h1>Total Strength = {totalStrength}</h1>
          <h1>Total Agility = {totalAgility}</h1>
        </>
      )}
      <h1>Current Amount Of Money Is ({money} BD/-)</h1>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
            <ZombieFighterComponent zombieFighter={zombieFighter} />
            <button onClick={() => handleAddFighter(zombieFighter)}>ADD</button>
          </li>
        ))}
      </ul>
      <h1>My Team Members</h1>
      <ul>
        {team.map((MyTeam, index) => (
          <li key={index}>
            <MyTeamComponent team={MyTeam} />
            <button onClick={() => handleAddFighter(zombieFighter)}>
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

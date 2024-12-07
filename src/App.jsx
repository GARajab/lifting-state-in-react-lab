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
      <p>Price: {zombieFighter.price} BD</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
    </div>
  )
}

const MyTeamComponent = ({ teamMember, onRemove }) => {
  return (
    <div>
      <h3>{teamMember.name}</h3>
      <img src={teamMember.img} alt={teamMember.name} />
      <p>Price: {teamMember.price} BD</p>
      <p>Strength: {teamMember.strength}</p>
      <p>Agility: {teamMember.agility}</p>
      <button onClick={onRemove}>REMOVE</button>
    </div>
  )
}

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/120/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/120/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/120/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/120/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/120/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/120/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/120/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/120/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/120/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/120/602b9e",
    },
  ])

  const totalStrength = team.reduce(
    (total, member) => total + member.strength,
    0
  )
  const totalAgility = team.reduce((total, member) => total + member.agility, 0)

  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setTeam((prevTeam) => [...prevTeam, zombieFighter])
      setMoney((prevMoney) => prevMoney - zombieFighter.price)
    } else {
      alert("Not enough money to add this fighter.")
    }
  }

  const handleRemoveFighter = (memberToRemove) => {
    setTeam((prevTeam) =>
      prevTeam.filter((teamMember) => teamMember.name !== memberToRemove.name)
    )
    setMoney((prevMoney) => prevMoney + memberToRemove.price)
  }

  return (
    <>
      <h1>Zombie Fighter Team Management</h1>
      <h1>Current Amount Of Money Is ({money} BD/-)</h1>
      {team.length === 0 ? (
        <h2>Pick some team members!</h2>
      ) : (
        <>
          <h3>Total Strength = {totalStrength}</h3>
          <h3>Total Agility = {totalAgility}</h3>
        </>
      )}
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
        {team.map((teamMember, index) => (
          <li key={index}>
            <MyTeamComponent
              teamMember={teamMember}
              onRemove={() => handleRemoveFighter(teamMember)}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

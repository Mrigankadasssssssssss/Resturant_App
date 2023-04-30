import React, { useState } from 'react'
import "./resturant.css"
import Menu from './menuAPi.js'
import MenuItems from './MenuItems'
const Resturant = () => {

  const [menuData,setMenuData]=useState(Menu)
  const filterItem = (category)=>{
    const updatedList = Menu.filter((currElem)=>{
      return currElem.category === category
    })
    setMenuData(updatedList)
  }
  
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>BreakFast</button>
        <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
        <button className="btn-group__item"
        onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
      </div>

    </nav>
    <MenuItems menuData={menuData}/>
    </>
  )
}

export default Resturant

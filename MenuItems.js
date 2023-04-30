import React from 'react'

const MenuItems = ({menuData}) => {
    //console.log(menuData);
  return (
    <>
        <section className="main-card--cointainer">
        {menuData.map((currElement)=>{
            return(
                <>
                <div className="card-container" key={currElement.id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{currElement.id}</span>
                <span className="card-author subtle">{currElement.name}</span>
                <span className="card-title">{currElement.name}</span>
                <span className="card-description subtle"> 
                {currElement.description}
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={currElement.image} alt="images" className="card-media"/>
        </div>
    </div>
    </>
            )
        })}


       
        </section>
    </>
  )
}

export default MenuItems

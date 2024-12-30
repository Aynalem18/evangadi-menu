import React, { Component } from 'react';
import menu from "../../commonResource/evangadi-menu-starter-code/data"
import FoodItems from "../FoodItems/FoodItem"
import con from  "./FoodContainer.module.css"

class FoodContainer extends Component {
    render() {
        return (
          <div>
            <div className={con["foods-container"]}>
              {menu.map((item) => (
                <FoodItems
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  desc={item.desc}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        );
    }
}

export default FoodContainer;

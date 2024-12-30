import React, { Component } from 'react';
import styles from "./FoodItems.module.css";





class FoodItem extends Component {
    render() {
        const {title, img,desc,price}= this.props;
        return (
          

          <>
            <div className={styles["single-food"]}>
              <div className={styles.img}>
                <img src={img} />
              </div>
              <div className={styles["title-price"]}>
                <h3>{title}</h3>
                <p>{price}</p>
              </div>
              <div className={styles["food-desc"]}>
                {desc.substring(0, 200) + "  ..."}
              </div>
            </div>
          </>
        );
        
    }
}


export default FoodItem;

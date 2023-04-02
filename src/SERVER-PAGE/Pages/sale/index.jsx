import "./style.scss"
import Header from "../header";
import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'


const Sale = () => {

    let location = useLocation();
    const handleClick = () => {

    }

    return <>
        <Header/>
        <section className="sale-section">
            <div className="sale-header">
                <div className="G-container">
                    <div className="sale-header-text">
                        <h3>HOME<i className="icon-arrow-right"></i> COLLECTIONS <i
                            className="icon-arrow-right"></i><span>
                            {!location.state ? "Exterior" : location.state.name}
                        </span></h3>
                    </div>
                </div>

            </div>
            <div className="G-container">
                <div className="sale-title">
                    <h3> {!location.state ? "Exterior" : location.state.name}</h3>
                </div>
                <div className="sale-catalog-description">
                    <p>  {!location.state ?
                        "     We spend endless hours in traffic jams; we like to eat in a car, like to listen to music and so\n" +
                        "                        on. And you know it is true. We believe that everything must be perfect in our business. We\n" +
                        "                        produce and sell only professional parts - that’s why we have a great number of devoted clients\n" +
                        "                        all over the country and there is nothing better than the happy and satisfied customers. We use\n" +
                        "                        the achievements of progress and provide some new technologies. Car is more than a piece of a\n" +
                        "                        metal, it became a social phenomenon. Our goods are real bestsellers; we are offering a great\n" +
                        "                        list of some unique spare parts that have no analogues. Have you ever noticed that we often try\n" +
                        "                        to\n" +
                        "                        talk to the car as if it was a human? We use the achievements of progress and provide some new\n" +
                        "                        technologies."
                        : location.state.description} </p>
                </div>
                <div className="filter-button-box">
                    <ul>
                        <li onClick={() => handleClick("all")}>All</li>
                        <li onClick={() => handleClick("Coupe")}>Coupe</li>
                        <li onClick={() => handleClick("Hatchback")}>Hatchback</li>
                        <li onClick={() => handleClick("Sedan")}>Sedan</li>
                        <li onClick={() => handleClick("Vehicle Body Type")}>Vehicle Body Type</li>
                        <li onClick={() => handleClick("Wheel Nuts")}>Wheel Nuts</li>
                        <li onClick={() => handleClick("Year")}>Year</li>
                    </ul>
                </div>
            </div>

        </section>
    </>
}
export default Sale
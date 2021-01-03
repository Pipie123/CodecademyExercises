import {animals} from './animals';
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>
let list = [];
for (const animal in animals) {
    list.push(
        <img key={animal}
             className="animal"
             alt={animal}
             src={animals[animal].image}
             ariaLabel={animal}
             role="button"
             onClick={displayFact}
        />
    );
}
function displayFact(e) {
    const animalS = e.target.alt;
    const animalC = animals[animalS];
    const random = Math.floor(Math.random() * animalC.facts.length);
    document.getElementById("fact").innerHTML = animalC.facts[random];
}
const animalFacts = (
    <div>
        <h1>{title ? title : "Click an animal for a fun fact"}</h1>
        {background}
        <p id="fact"/>
        <div className ="animals">
            {list};
        </div>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));

import React, {useState} from "react";
import "./home.css";
import { calculateAge } from "../../util/calculateAge";
import { validateAge } from "../../util/calculateAge";

const Home = () => {
    const [date, setDate] = useState(new Date());
    const [age, setAge] = useState(0);

    const handleDateChange = (event) => {
        setDate(event.target.value)
        console.log(date);
    };

    const handleCalculate = () => {
        const age = calculateAge(date);
        const validatedAge = validateAge(age);
        setAge(validatedAge);
    };
    return (
        <div className="home__container">
            <label>Date:</label>
            <input type="date" onChange={handleDateChange} max={new Date()} />
            <label>Age:</label>
            <input type="text" value={age} readOnly />
            <button onClick={handleCalculate}>Calculate</button>
        </div>
    );
    };

export default Home;
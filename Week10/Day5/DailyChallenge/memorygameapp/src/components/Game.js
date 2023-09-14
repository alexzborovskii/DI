import { useState, useEffect } from "react";
import "./Game.css";
const uuid = require("uuid");

const Game = () => {
    const [heroes, setHeroes] = useState();
    const [score, setScore] = useState(0);
    const [record, setRecord] = useState(0);

    useEffect(() => {
        allHeroes();
    }, []);

    const getData = () => {
        const data = require("../superheroes.json").superheroes;
        for (let hero of data) {
            hero.id = uuid.v4();
        }
        return data;
    };

    const shuffle = (data) => {
        return data
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const allHeroes = () => {
        try {
            const data = getData();
            setHeroes(shuffle(data));
        } catch (e) {
            console.log(e);
        }
    };

    const playGame = (id) => {
        let changedHeroes = [...heroes];
        const clickedHero = changedHeroes.find((item) => item.id === id);
        console.log("clickedHero=>", clickedHero);
        if (clickedHero.clicked) {
            score > record ? setRecord(score) : setRecord(record);
            setScore(0);

            //recovering clicked property
            let startHeroes = [...heroes];
            for (let hero of startHeroes) {
                hero.clicked = false;
            }

            setHeroes(shuffle(startHeroes));
        } else {
            clickedHero.clicked = true;
            changedHeroes = shuffle(changedHeroes);
            setHeroes(changedHeroes);
            setScore(score + 1);
        }
    };

    return (
        <div id="game-root">
            {console.log("heroes=>", heroes)}
            <header id="game-header">
                <h1 id="game-name">Heroes Memory Game</h1>
                <h3 id="description">Get points by clicking on an image but don't click on any more than once!</h3>
                <div>
                    <h4 id="score">Score: {score}</h4>
                    <h4 id="record">Top-score: {record}</h4>
                </div>
            </header>
            <div id="game-box">
                {heroes &&
                    heroes.map((item) => {
                        return (
                            <div
                                className="hero-card"
                                onClick={() => playGame(item.id)}
                                key={item.id}>
                                <img src={item.image} alt={item.name}></img>
                                <h4>Name: {item.name}</h4>
                                <p class="occupation">{item.occupation}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Game;

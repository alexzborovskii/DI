import { useState, useEffect } from "react";
import randomColor from "randomcolor";
import quotesdb from "../quotesdb.js";
import "./Quotes.css";

let indexShown = [];

const Quotes = (props) => {
    const [quote, setQuote] = useState([]);
    const [color, setColor] = useState();

    useEffect(() => {
        getQuote();
    }, []);

    const getQuote = () => {
        try {
            let randomIndex = -1;
            do {
                randomIndex = Math.floor(Math.random() * quotesdb.length);
            } while (indexShown.includes(randomIndex));
            const randomQuote = quotesdb[randomIndex];
            indexShown.push(randomIndex);
            setQuote([randomQuote["quote"], randomQuote["author"]]);
            setColor(randomColor());
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="root-box" style={{ background: color }}>
            <h1>Random quote</h1>
            <div className="quote-box">
                {quote[0] && (
                    <h2 className="quote" style={{ color: color }}>
                        "{quote[0]}"
                    </h2>
                )}
                {quote[1] && (
                    <p className="author" style={{ color: color }}>
                        -{quote[1]}-
                    </p>
                )}
                <button onClick={getQuote} style={{ background: color }}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Quotes;

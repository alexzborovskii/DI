import { useState } from 'react';

const BuggyCounterF = (props) => {
    const [count, setCount] = useState(0);
    if (count > 5) {
        throw new Error("I crashed!");
    }
    return (
        <>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            
        </>
    )
}
export default BuggyCounterF
import "./Exercise.css"
const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">I am a paragraph</p>
        <a href="#">Link</a>
        <form>
            <input type="text"/>
            <input type="text"/>
        </form>
        <img src="https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg"></img>
        <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
        </ul>
        </>
    );
};

export default Exercise

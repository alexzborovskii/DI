const PostList = () => {
    const data = require("../ex2.json");

    return (
        <div style={{ marginTop: "100px" }}>
            <h1>Hi! This is a Title! (Exercise 2)</h1>
            <br />
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default PostList;

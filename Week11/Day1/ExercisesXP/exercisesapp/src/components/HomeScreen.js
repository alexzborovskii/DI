import PostList from "./PostList";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

const HomeScreen = () => {
    return (
        <>
            <h1>Home</h1>
            <PostList />
            <br/>
            <Example1 />
            <br/>
            <Example2 />
            <br/>
            <Example3 />
        </>
    );
};

export default HomeScreen;

// import Hello from "./components/Hello";
import User from "./components/User";
import "./App.css";
import users from "./data.json";
import{v4 as uuidv4} from 'uuid';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import 'tachyons'

function App() {
    console.log("users: ", users);

    return (
        <div>
          {/* <Switch {...label} defaultChecked /> */}
            {users.map((item) => {
                // return <Hello name={item.name} email={item.email}/>
                return <User info={item} key={uuidv4()}/>;
            })}
        </div>
    );
}

export default App;

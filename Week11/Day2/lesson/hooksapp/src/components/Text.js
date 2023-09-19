import {useContext} from 'react';
import { AppTextContext } from '../App';

const Text = (props) => {
    const {setTxt} = useContext(AppTextContext);
    return (
        <>
            <input onChange={(e) => setTxt(e.target.value)} />
        </>
    )
}
export default Text;
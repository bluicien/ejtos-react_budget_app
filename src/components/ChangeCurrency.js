import React, { useContext } from 'react';
import { AppContext} from '../context/AppContext';
const ChangeCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);
    function changeCurrency(event) {
        const {value} = event.target
        return dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    const styleOptions = {
        backgroundColor: "#b6e09c",
        border: "transparent",
        borderRadius: "10px", 
        color: "black"}

    const styleSelect = {
        backgroundColor: "#b6e09c", 
        border: "transparent", 
        borderRadius: "2px", 
        width: "20px", 
        color: "white"}
    
    return (
        <div className='alert alert-secondary' style={{backgroundColor: "#b6e09c", width: "200px"}}> 
            <label style={{backgroundColor: "#b6e09c", color: "white"}} htmlFor="inputGroupSelect03">Currency({currency})
            <select className="currency-select" id="inputGroupSelect03" style={styleSelect}  onChange={(event) => changeCurrency(event)}>
                <option defaultValue="£ Pound" name="currency" style={styleOptions}>£ Pound</option>
                <option value="$ Dollar" name="currency" style={styleOptions}>$ Dollar</option>
                <option value="$ Dollar" name="currency" style={styleOptions}>€ Euro</option>
                <option value="₹ Ruppee" name="currency" style={styleOptions}>₹ Ruppee</option>
            </select>
            </label>
        </div>
    );
};
export default ChangeCurrency;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    function budgetChange(event) {
    
    const {value} = event.target
                dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });
            } 
    
    return (
        <div className='alert alert-secondary' style={{display: 'flex', flexDirection: 'row'}}>
            <label style={{width: '70px'}}>Budget:£</label>
            <input
            required='required'
            name='budget'
            type='number'
            step="10"
            id='budget'
            value={budget}
            style={{ marginLeft: '2rem' , size: 10}}
            onChange={(event) => budgetChange(event)}>
            </input>
        </div>
    );
};
export default Budget;
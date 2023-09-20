import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';


function MealItemForm(props) {
    const amountInputRef = useRef();
    const [isAmountValid,setIsAmountValid] = useState(true)

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().lenth === 0 ||enteredAmountNumber < 1|| enteredAmountNumber >5){
            setIsAmountValid(false);
            return ;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                lable="Amount"
                input={{
                id: "mount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button>+ Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default MealItemForm;
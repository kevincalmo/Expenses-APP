import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {


    /* const [enteredTitle, setEnteredTitle] = useState('');
        const [enteredPrice, setEnteredPrice] = useState(0);
        const [enteredDate, setEnteredDate] = useState(null); */

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: 0,
        enteredDate: ''
    });

    /* Function */
    const titleChangeHandler = (event) => {
        /* Je modifie l'état de ma propriété pour ajouter le titre que je viens d'entrer */
        //setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }); */
        setUserInput((prevState) => { //bonne pratique pour react
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        }
        );
    };
    const priceChangeHandler = (event) => {
        /* Je modifie l'état de ma propriété pour ajouter le prix que je viens d'entrer */
        //setEnteredPrice(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredPrice: event.target.value,
        }); */
        setUserInput((prevState) => { //bonne pratique pour react
            return {
                ...prevState,
                enteredPrice: event.target.value,
            }
        }
        );
    };
    const dateChangeHandler = (event) => {
        /* Je modifie l'état de ma propriété pour ajouter la date que je viens d'entrer */
        //setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */
        setUserInput((prevState) => { //bonne pratique pour react
            return {
                ...prevState,
                enteredDate: event.target.value,
            }
        }
        );
    };

    const submitHandler = (event) => {
        event.preventDefault();
        /* Je récupère les valeurs dans un nouvel objet */
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        };
        /* Je fais appel à la fonction que j'ai passé en props dans NewExpense.js  */
        props.onSaveExpenseData(expenseData);
        /* Je vide mon formulaire */
        setUserInput({
            enteredTitle:'',
            enteredPrice: '',
            enteredDate: ''
        });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    {/* Modification du titre */}
                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    {/* Modification du prix */}
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type="number" value={userInput.enteredPrice} min="0.01" step="0.01" onChange={priceChangeHandler} />
                    </div>
                    {/* Modification de la date */}
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add expense</button>
                </div>
            </form>
        </>
    );
};

export default ExpenseForm;
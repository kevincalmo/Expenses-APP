import { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props, key) => {

    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    const [title, setTitle] = useState(expenseTitle);

    const handleChange = () => {
        setTitle('Hello world');
        console.log(title);
    }

    return (
        <>
            <Card key={key} className="expense-item">
                {/* Tous ce qui est à l'intérieur est dans la propriété props.children */}
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
                <button onClick={handleChange}> Change Title</button>
            </Card>

        </>
    )
}

export default ExpenseItem;
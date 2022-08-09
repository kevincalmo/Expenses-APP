
import './styles/ExpenseItem.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/new_expense/NewExpense';
import ExpensesFilter from './components/expense_filter/ExpenseFilter';
import ExpenseChart from './components/ExpenseChart';
import { useState } from 'react';

function App() {
  const DUMMY_EXPENSES = [
    {
      title: 'Car Insurrance',
      date: new Date(2021, 2, 28),
      amount: 294.67
    },
    {
      title: 'Car Insurrance',
      date: new Date(2021, 2, 28),
      amount: 294.67
    },
    {
      title: 'Car Insurrance',
      date: new Date(2021, 2, 28),
      amount: 294.67
    },
  ];

  const [filter, setFilter] = useState('2021');
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    /* J'ajoute ma nouvelle dépense */
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [...prevExpenses,
        expense]
    }
    );
  };

  const filterChangeHandler = selectedYear => {
    setFilter(selectedYear);
  };
  /* Le tableau des dépenses filtrer */
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filter;
  });
  /*je crée une variable pour acceuillir ma ternaire  */
  let expensesContent = filteredExpenses.length === 0 ?
    <p>No expenses found</p> :
    filteredExpenses.map((expense, key) => {
      return <ExpenseItem key={key} title={expense.title} amount={expense.amount} date={expense.date}
      />
    });

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
        <ExpensesFilter selectedValue={filter} onFilterChange={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
      </div>
      {/* Mise en place d'une condition avec une ternaire */}
      { expensesContent}
    </>

  );
}

export default App;

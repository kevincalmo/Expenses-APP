
import './styles/ExpenseItem.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: 'Car Insurrance',
      date: new Date(2021,2,28),
      amount: 294.67
  },
    {
      title: 'Car Insurrance',
      date: new Date(2021,2,28),
      amount: 294.67
  },
    {
      title: 'Car Insurrance',
      date: new Date(2021,2,28),
      amount: 294.67
  },
  ];
  return (
    <>
    {expenses.map((expense,key)=>{
     return <ExpenseItem key={key} title={expense.title} amount={expense.amount} date={expense.date}/>
    })}
    </>
    
  );
}

export default App;

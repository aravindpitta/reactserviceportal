import Expenses from './components/Expenses';

import './App.css';

function App() {
  const expenses = [
    {
      id : 'e1',
      title: 'Toilet Rent',
      amount: 94.12,
      date: new Date(2022 ,8, 1),
     },
     {
      id : 'e2',
      title: 'Utility Bill',
      amount: 110.00,
      date: new Date(2022 ,8, 1),
     },
     {
      id : 'e3',
      title: 'News Paper Bill',
      amount: 12.00,
      date: new Date(2022 ,8, 5),
     },
     {
      id : 'e4',
      title: 'Milk Bill',
      amount: 180.00,
      date: new Date(2022 ,8, 5),
     }
];

  return (
    <div className="App">
        <p >
          My Expenses Portal
        </p>
        <Expenses items= {expenses} />        
    </div>
  );
}

export default App;

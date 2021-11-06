import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2,28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <dic>{expenseDate.toISOString()}</dic>
      <div className="expense-item__description">
        <div>{expenseTitle}</div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

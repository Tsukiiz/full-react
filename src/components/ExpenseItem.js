import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <dic>March 28th 2021</dic>
      <div className="expense-item__description">
        <div>Car Insurance</div>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

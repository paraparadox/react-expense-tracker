import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={ sign === '-' ? 'minus' : 'plus' }>
      { transaction.text } 
      <span>
        { sign }${ Math.abs(transaction.amount) }
      </span>
      <button className="delete-btn" onClick={ () => deleteTransaction(transaction.id) }>x</button>
    </li>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
}

export default Transaction

import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={ sign === '-' ? 'minus' : 'plus' }>
      { transaction.text } 
      <span>
        { sign }${ Math.abs(transaction.amount) }
      </span>
      <button className="delete-btn">x</button>
    </li>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
}

export default Transaction

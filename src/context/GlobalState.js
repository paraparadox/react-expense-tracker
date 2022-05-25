import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [],
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await fetchTransactions()
      
      dispatch({
        type: 'FETCH_TRANSACTIONS',
        payload: transactions,
      });
    }

    getTransactions()
  }, []);

  // Fetch Transactions
  const fetchTransactions = async () => {
    const res = await fetch('http://localhost:5000/transactions')
    const transactions = await res.json()

    return transactions
  }

  // Add Action
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    }); 
  }

  // Delete Action
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider value={{ 
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
    }}>

      { children }

    </GlobalContext.Provider>
  )
}
import { useContext } from 'react';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';

export const Button = () => {
  console.log('botão renderizado');
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  return (
    <div>
      <p>{counterState.counter}</p>
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>
    </div>
  );
};

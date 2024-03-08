import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  inputChangeAmount,
  incrementByReactAmount,
} from "../store/reducers/counterReducer";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.button);
  const inputValue = useSelector((state) => state.counter.input);
  const dispatch = useDispatch();

  const [reactCount, setReactCount] = useState(1);

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <p>React Count: {reactCount}</p>

        <br />
        <button
          className="btn btn-success"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className="btn btn-danger"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br />
        <button
          className="btn btn-warning"
          aria-label="Increment by amount value"
          onClick={() => dispatch(incrementByAmount())}
        >
          Increment Amount
        </button>
        <input
          className="form-control "
          type="text"
          onChange={(event) =>
            dispatch(inputChangeAmount(Number(event.target.value) || 1))
          }
          value={inputValue}
        />

        <br />
        <br />
        <input
          className="form-control"
          type="text"
          value={reactCount}
          onChange={(e) => setReactCount(Number(e.target.value))}
        />
        <button
          className="btn btn-primary"
          aria-label="Increment input value"
          onClick={() =>
            dispatch(incrementByReactAmount(Number(reactCount) || 1))
          }
        >
          Increment input value
        </button>

        {/* <br />
        <button
          className="btn btn-success"
          aria-label="Increment async value"
          onClick={() => dispatch(incrementByAsync(Number(reactCount) || 1))}
        >
          Increment by async
        </button> */}
      </div>
    </div>
  );
}

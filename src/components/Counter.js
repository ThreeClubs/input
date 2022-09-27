export default function Counter({count, updateCount}) {
  return (
    <div className="counter">
      <div>Count: {count}</div>
      <button className="button" onClick={updateCount}>Add Count</button>
    </div>
  );
}

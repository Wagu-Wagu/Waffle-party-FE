import Router from "./Router";

function App() {
  const num = 1;
  const num2 = 2;

  const func = () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1");
  };

  const func2 = async () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1");
  };

  console.log(num == num2);
  return (
    <>
      <Router />
    </>
  );
}

export default App;

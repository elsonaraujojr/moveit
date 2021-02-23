import { useState } from "react";

interface ButtonProps {
  color: string;
  children: string;
}
// components state props ** Trilha 1
// {} código javascript {{}} objeto javascript
export function Button(props: ButtonProps) {

  const [counter, setCounter] = useState(1);

  function increment() {
    return setCounter(counter + 1)
  }

  return (
    <button type="button" style={{ backgroundColor: props.color }} onClick={increment}>
      Botão
      <strong> {props.children} = {counter}</strong>
    </button>
  );
}
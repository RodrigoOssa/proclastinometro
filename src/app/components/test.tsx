import { useState } from "react";

const Test = () => {
    const [count, setState] = useState(0)
    const sum = () => {
        setState((i) => i++)
    }
    return (
        <div>
            Soy un componente de pruebas {count}
            <button onClick={sum}></button>
        </div>
    )
}

export default Test;
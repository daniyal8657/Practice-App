import React,{useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Counter.css"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Counter</h1>
            <br />
            <Card className="counter">
            <Button className="btns" onClick={()=>setCount(count - 1)}>Isku click kare to minus me bhi ja sakte</Button>
            <h3>{count}</h3>
            <Button className="btns" onClick={()=>setCount(count + 1)}>Ispe Click kare to number badhte</Button>
            </Card>
        </div>
    )
}
import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <br />
      <Card className="counter">
        <Row>
          <Col>
            <Button className="btns" onClick={() => setCount(count - 1)}
            disabled={true && count <= 0}
            >
              -
            </Button>
          </Col>
          <Col>
            <h3>{count}</h3>
          </Col>
          <Col>
            <Button className="btns" onClick={() => setCount(count + 1)}
            disabled={true && count >= 100}
            >
              +
            </Button>
          </Col>
        </Row>
        <Button className="reset" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Card>
    </div>
  );
};

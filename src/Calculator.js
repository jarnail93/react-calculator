import { useState } from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { evaluate } from "mathjs";

import History from "./History"
import Display from "./Display";
import ButtonGrid from './ButtonGrid';
import './Calculator.css';

function Calculator(prop) {

  console.log('Calculator re-rendered');

  const historyInitialValue = [];
  const [history, setHistory] = useState(historyInitialValue);
  const [display, setDisplay] = useState("");

  // if theme is dark, borders will be light
  let inverseTheme = prop.darkTheme ? "light" : "dark";
  let sameTheme = prop.darkTheme ? "dark" : "light";

  function addHistory(newEntry) {
    let existingHistory = [newEntry, ...history];
    setHistory(existingHistory);
  }

  function buttonPressed(btn) {
    let exp = display;
    let ansPresence = false;

    if (exp.includes('Ans: ')) {
      ansPresence = true;
      exp = exp.slice(5);
    }

    if ('b' == btn) {
      if (ansPresence) exp = "";
      else exp = exp.slice(0, -1);
    }
    else if ('AC' == btn) {
      exp = "";
      setHistory(historyInitialValue);
    }
    else if ('=' == btn) {
      try {
        let ans = evaluate(exp);
        addHistory({ exp, ans: ans + '' });
        exp = "Ans: " + ans;
      }
      catch (e) {
        exp = 'Malformed exoression';
      }
    }
    else if ('Sqrt' == btn) {
      try {
        exp = `sqrt(${exp})`;
        let ans = evaluate(exp);
        addHistory({ exp, ans: ans + '' });
        exp = "Ans: " + ans;
      }
      catch (e) {
        exp = 'Malformed exoression';
      }
    }
    else {
      if (ansPresence && [...Array(10).keys()].includes(parseInt(btn)))
        exp = btn;
      else if (btn instanceof Object && btn.hasOwnProperty('isAnExpression') && btn.isAnExpression)
        exp = btn.expression;
      else
        exp += btn;
    }

    setDisplay(exp);
  }

  return (
    <Card className={[
      "border-" + inverseTheme + " text-bg-" + sameTheme,
      "shadow"
    ]}>
      <Card.Header className={"border-" + inverseTheme}>
        Calculator
      </Card.Header>

      <Card.Body className="p-0">

        <Container fluid className="py-2">

          {/* Display Screen */}
          <Row className={[
            "display",
            "border-" + inverseTheme,
            "border-bottom pb-2 mb-3"
          ]}>
            <Col>
              <Display value={display} setValue={setDisplay} theme={sameTheme} />
            </Col>
          </Row>

          {/* Button Grid here */}
          <Row>
            <Col>
              <ButtonGrid buttonPressed={buttonPressed} theme={sameTheme} />
            </Col>
          </Row>

        </Container>
      </Card.Body>

      <Card.Footer className={["history", "border-" + inverseTheme]}>
        <History list={history} buttonPressed={buttonPressed} theme={sameTheme} darkTheme={prop.darkTheme} />
      </Card.Footer>
    </Card >
  );
}

export default Calculator;
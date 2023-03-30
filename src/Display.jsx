import { Form } from "react-bootstrap"

export default function Display(prop) {

  console.log('Display re-rendered');

  return (
    < Form.Control
      type="text"
      placeholder="0"
      value={prop.value}
      className={"display-area border rounded " + prop.theme}
      onChange={(e) => prop.setValue(e.target.value)
      } />
  );
}
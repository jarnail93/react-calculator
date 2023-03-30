import { BsBackspace } from "react-icons/bs";
import { Button } from "react-bootstrap";

const ButtonsData = [
  {
    id: 1,
    className: "border rounded backspace",
    variant: "danger",
    text: <BsBackspace pointerEvents="none" />,
    value: 'b'
  },
  { id: 2, className: "border rounded", variant: "", text: "(" },
  { id: 3, className: "border rounded", variant: "", text: ")" },
  { id: 4, className: "border rounded", variant: "info", text: "AC" },
  { id: 5, className: "border rounded", variant: "", text: "Pi", value: ' pi ' },
  { id: 6, className: "border rounded", variant: "", text: "7" },
  { id: 7, className: "border rounded", variant: "", text: "8" },
  { id: 8, className: "border rounded", variant: "", text: "9" },
  { id: 9, className: "border rounded", variant: "", text: "/" },
  { id: 10, className: "border rounded", variant: "", text: "Sqrt" },
  { id: 11, className: "border rounded", variant: "", text: "4" },
  { id: 12, className: "border rounded", variant: "", text: "5" },
  { id: 13, className: "border rounded", variant: "", text: "6" },
  { id: 14, className: "border rounded", variant: "", text: "x", value: "*" },
  { id: 15, className: "border rounded", variant: "", text: "x^2", value: "^" },
  { id: 16, className: "border rounded", variant: "", text: "1" },
  { id: 17, className: "border rounded", variant: "", text: "2" },
  { id: 18, className: "border rounded", variant: "", text: "3" },
  { id: 19, className: "border rounded", variant: "", text: "-" },
  { id: 20, className: "border rounded equal", variant: "primary", text: "=" },
  { id: 21, className: "border rounded", variant: "", text: "0" },
  { id: 22, className: "border rounded", variant: "", text: "." },
  { id: 23, className: "border rounded", variant: "", text: "%" },
  { id: 24, className: "border rounded", variant: "", text: "+" }
];


export default function ButtonGrid(prop) {

  console.log('ButtonGrid re-rendered');

  const ButtonList = ButtonsData.map(elm => {
    // For some reason, if we update the elm, it will update the existing
    // object in orignal ButtonsData array
    let newElm = Object.assign({}, elm);
    newElm.value = newElm.hasOwnProperty('value') ? newElm.value : newElm.text;
    newElm.variant = newElm.variant || prop.theme;
    return newElm;
  });

  return (
    <div className="d-grid pad-grid">
      {
        ButtonList.map(element =>
          <Button
            key={element.id}
            variant={element.variant}
            className={element.className}
            onClick={(e) => prop.buttonPressed(e.target.value)}
            value={element.value}
            datav={element.value}>
            {element.text}
          </Button>
        )
      }
    </div>
  );
}
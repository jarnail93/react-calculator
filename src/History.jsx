import { ListGroup, Button } from "react-bootstrap";

export default function History(prop) {

  console.log('History re-rendered');

  const dataList = prop.list.map((item, idx) => {
    return {
      id: `id-${idx}`,
      exp: item.exp,
      ans: item.ans
    };
  });

  const btnVariant = prop.darkTheme ? "outline-dark" : "outline-secondary";

  return (
    <>
      <p className={dataList.length > 0 ? "" : "m-0"}>History</p>
      {
        <ListGroup as="ol" numbered>
          {
            dataList.map(item =>
              <ListGroup.Item as="li" key={item.id} variant={prop.theme}>
                <Button
                  value={item.exp}
                  variant={btnVariant}
                  className="py-0 px-1 rounded-1"
                  onClick={(e) => prop.buttonPressed({ isAnExpression: true, expression: item.exp })}>
                  {item.exp}
                </Button>
                {" = "}
                <Button
                  value={item.ans}
                  variant={btnVariant}
                  className="py-0 px-1 rounded-1"
                  onClick={(e) => prop.buttonPressed({ isAnExpression: true, expression: item.ans })}>
                  {item.ans}
                </Button>
              </ListGroup.Item>
            )
          }
        </ListGroup>
      }
    </>
  );
}
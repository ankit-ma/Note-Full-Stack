import "./CardList.css";
import Card from "../UI/Card";
import TodoCardOption from "../Page/AddForm/TodoCardOption";
import { useState } from "react";
function CardItem(props) {
  const [todoOption, settodoOption] = useState(false);
  const [formvisible, setvisible] = useState(false);
  //   const cardoptionhandler = () => {
  //     if (formvisible == false) {
  //       settodoOption(true);
  //       setvisible(true);
  //     } else {
  //       settodoOption(false);
  //       setvisible(false);
  //     }
  //   };

  const onhoverMousehandler = () => {
    settodoOption(true);
  };
  const onhoveroutMousehandler = () => {
    settodoOption(false);
  };
  const date = props.datename.split("-");
  return (
    <>
      <Card className="cardd">
        <div
          onMouseOver={onhoverMousehandler}
          onMouseOut={onhoveroutMousehandler}
        >
          {!todoOption && (
            <>
              <h1>{props.titlename}</h1>
              <p style={{ wordWrap: "break-word", color: "grey" }}>
                {props.describename}
              </p>
              <p style={{ padding: "5px", fontSize: "small" }}>{date}</p>
            </>
          )}
          {todoOption && (
            <TodoCardOption
              title={props.titlename}
              desc={props.describename}
              date={props.datename}
              cardid={props.id}
              inprogres={props.inprogres}
              completed={props.completed}
              todos={props.todos}
              addtoinprogress={props.addtoinprogress}
              addtocomplete={props.addtocomplete}
            />
          )}
        </div>
      </Card>
    </>
  );
}
export default CardItem;

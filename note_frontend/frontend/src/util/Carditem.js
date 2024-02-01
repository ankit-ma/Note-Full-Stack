import "./CardList.css";
import CardItem from "./Carditem";
function CardList(props) {
  return (
    <>
      {props.datas.map((data) => {
        return (
          <CardItem
            id={data.id}
            titlename={data.title}
            describename={data.description}
            datename={data.date.toString()}
            inprogres={props.inprogres}
            completed={props.completed}
            todos={props.todos}
            addtoinprogress={props.addtoinprogress}
            addtocomplete={props.addtocomplete}
          />
        );
      })}
    </>
  );
}
export default CardList;

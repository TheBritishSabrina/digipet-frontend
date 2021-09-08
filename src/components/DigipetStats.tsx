import { IDigipet } from "../interfaces/IDigipet";

export default function DigipetStats(props: {
  digipet: IDigipet;
}): JSX.Element {
  return (
    <div>
      <h3>Happiness: {props.digipet.happiness}</h3>
      <h3>Nutrition: {props.digipet.nutrition}</h3>
      <h3>Discipline: {props.digipet.discipline}</h3>
    </div>
  );
}

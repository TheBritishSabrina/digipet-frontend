type PropType = {
  handleClick: (value: React.SetStateAction<string>) => void;
  label: string;
};

export default function ActionButton(props: PropType): JSX.Element {
  // take in handleClick function
  return <div></div>; //<button onClick={props.handleClick}>{props.label}</button>;
}

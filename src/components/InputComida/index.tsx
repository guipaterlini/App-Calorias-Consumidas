type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function InputComida(props: Props) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      type="text"
      name="comida"
      placeholder="Comida"
    />
  );
}

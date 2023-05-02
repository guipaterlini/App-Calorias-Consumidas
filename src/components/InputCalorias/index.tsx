type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function InputCalorias(props: Props) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      type="number"
      name="calorias"
      placeholder="Calorias"
    />
  );
}

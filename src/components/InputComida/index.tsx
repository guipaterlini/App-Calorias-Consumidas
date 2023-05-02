type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function InputComida(props: Props) {
  return <input type="text" name="comida" placeholder="Comida" />;
}

type Props = {
  title: string;
  icon: string;
};

export default function AddButton(props: Props) {
  return (
    <button>
      {props.icon}
      {props.title}
    </button>
  );
}

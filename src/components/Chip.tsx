interface Props {
  text: string;
}

export const Chip = ({ text }: Props) => {
  return <span className="bg-bg-chip rounded-xl px-2.5 py-1.5 hover:animate-jump">{text}</span>;
};

interface HeaderButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function HeaderButton({ onClick, children }: HeaderButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

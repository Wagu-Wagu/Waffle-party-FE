interface HeaderButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function HeaderButton({
  onClick,
  children,
  className,
}: HeaderButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

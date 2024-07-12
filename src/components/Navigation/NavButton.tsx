import { Link, useLocation } from "react-router-dom";

interface NavButtonProps {
  path: string;
  children: React.ReactNode;
}

export default function NavButton({ path, children }: NavButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`px-[2.5rem] pt-[0.7rem] flex flex-col gap-[0.4rem] items-center justify-center text-caption02 font-regular ${isActive ? "text-yellow5" : ""}`}
    >
      {children}
    </Link>
  );
}

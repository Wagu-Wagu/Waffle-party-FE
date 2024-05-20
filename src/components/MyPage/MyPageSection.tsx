interface myPageSectionProps {
  title: string;
  children: React.ReactNode;
}
export default function MyPageSection({ title, children }: myPageSectionProps) {
  return (
    <div className="flex flex-col gap-[2rem]">
      <p className="h-[2.2rem] font-sans font-light leading-[2.2rem] text-gray8 text-[1.4rem] flex items-center">
        {title}
      </p>
      <div className="flex flex-col gap-[2.7rem] leading-[2.4rem]">
        {children}
      </div>
    </div>
  );
}

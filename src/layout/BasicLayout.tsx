export default function BasicLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="layout-wrapper">
      <div className="layout-main">{children}</div>
    </div>
  );
}

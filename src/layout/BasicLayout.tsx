export default function BasicLayout(props: { children: any }) {
  const { children } = props;
  return (
    <div className="layout-wrapper">
      <div className="layout-main">{children}</div>
    </div>
  );
}

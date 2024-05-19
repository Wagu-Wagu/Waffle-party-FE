import Router from "./Router";
import BasicLayout from "./layout/BasicLayout";

export default function App() {
  return (
    <>
      <BasicLayout>
        <Router />
      </BasicLayout>
    </>
  );
}

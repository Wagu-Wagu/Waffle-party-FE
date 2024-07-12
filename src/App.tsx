import { RecoilRoot } from "recoil";
import Router from "./Router";
import BasicLayout from "./layout/BasicLayout";

export default function App() {
  return (
    <RecoilRoot>
      <BasicLayout>
        <Router />
      </BasicLayout>
    </RecoilRoot>
  );
}

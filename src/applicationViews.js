import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { LayoutForm } from "./components/layout/layoutForm";

export const AppViews = () => {
  return (
    <>
      <Route exact path="/">
        <LayoutForm />
      </Route>
    </>
  );
};

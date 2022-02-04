import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { LayoutForm } from "./components/layout/layoutForm";
import { ResultsList } from "./components/layout/layoutResults";
import  { HomeLayout} from "./components/layout/homeLayout";
import { FavesList } from "./components/profile/favorites";
import { ResourcePage } from "./components/about/about";

export const AppViews = () => {
  return (
    <>
      <Route exact path="/">
        <HomeLayout />
      </Route>
      <Route exact path="/favorites">
          <FavesList />
      </Route>
      <Route exact path="/about">
          <ResourcePage />
      </Route>
      
    </>
  );
};

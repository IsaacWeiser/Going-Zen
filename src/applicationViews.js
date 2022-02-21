import { Route } from "react-router-dom/cjs/react-router-dom.min";
import  { HomeLayout} from "./components/layout/homeLayout";
import { FavesList } from "./components/profile/favorites";
import { ResourcePage } from "./components/about/about";
import { ProfilePage } from "./components/profile/profile";

//establishes the routing for all non registration related pages
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
      <Route exact path="/profile" >
        <ProfilePage />
      </Route> 
    </>
  );
};

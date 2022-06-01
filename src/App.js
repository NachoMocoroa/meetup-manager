import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

import { ALL_MEETUP_PAGE, NEW_MEETUP_PAGE, FAVORITES_PAGE } from "./utils/constants";

function App() {

  return (
    <Router>
      <div className="wrapper" data-test="app">
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path={ALL_MEETUP_PAGE.path} element={<AllMeetupsPage />} />
            <Route path={NEW_MEETUP_PAGE.path} element={<NewMeetupsPage />} />
            <Route path={FAVORITES_PAGE.path} element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

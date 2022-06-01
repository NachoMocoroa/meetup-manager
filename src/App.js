import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { requestMeetup } from "./redux/action";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

import { ALL_MEETUP_PAGE, NEW_MEETUP_PAGE, FAVORITES_PAGE } from "./utils/constants";

function App() {
  const pathJSON = "/data.json";
  const { meetupData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(requestMeetup(pathJSON));
  }, [dispatch]);
  
  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <Router>
      {isLoading && <div>Data loading...</div>}
      {meetupData.length > 0 && <div className="wrapper" data-test="app">
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path={ALL_MEETUP_PAGE.path} element={<AllMeetupsPage />} />
            <Route path={NEW_MEETUP_PAGE.path} element={<NewMeetupsPage />} />
            <Route path={FAVORITES_PAGE.path} element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </div>}
    </Router>
  );
}

export default App;

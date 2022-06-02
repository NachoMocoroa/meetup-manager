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

import { NAVIGATION, TEXTS } from "./utils/constants";

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
      {isLoading && <div>{TEXTS.LOADING.text}</div>}
      {meetupData.length > 0 && <div className="wrapper" data-test="app">
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path={NAVIGATION.ALL_MEETUP_PAGE.path} element={<AllMeetupsPage />} />
            <Route path={NAVIGATION.NEW_MEETUP_PAGE.path} element={<NewMeetupsPage />} />
            <Route path={NAVIGATION.FAVORITES_PAGE.path} element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </div>}
    </Router>
  );
}

export default App;

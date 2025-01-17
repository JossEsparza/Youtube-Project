import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { FavoritePage } from '../pages/FavoritePage';
import { HomePage } from '../pages/HomePage';
import VideoPage from '../pages/VideoPage';
import ToggleContext from '../state/ToggleContext';
import { Sidebar } from './../components/sidebar/Sidebar';
import './../index.css';

export const YoutubeAppRouter = () => {
  const { currentToggle } = useContext(ToggleContext);
  return (
    <Router>
      <Navbar />
      <div className="main-layout">
        {currentToggle && <Sidebar />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/favorites" component={FavoritePage} />
          <Route path="/:video_id" component={VideoPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

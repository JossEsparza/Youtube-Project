import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <div className="main-layout">
        {currentToggle && <Sidebar />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={VideoPage} />
          <Route exact path="/favorites" component={FavoritePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

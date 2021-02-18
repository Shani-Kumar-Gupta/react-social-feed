import './App.css';
import FacebookFeed from './components/facebookfeed';
import { TwitterFeed } from './components/twitterfeed';

function App() {
  return (
    <div className="App">
      <h1>Social Feed</h1>
      <div className="feed">
        <section className="facebook-feed">
          <h2>Facebook Feeds</h2>
          <FacebookFeed/>
        </section>
        <section className="twitter-feed">
          <h2>Twitter Feeds</h2>
          <TwitterFeed/>
        </section>
      </div>
    </div>
  );
}

export default App;

import './style.scss';

import HeroBanner from './heroBanner/Page';
import Trending from './trending/Trending';

HeroBanner;
Trending;

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <div style={{height: 1000}}></div>
    </div>
  )
}

export default Home

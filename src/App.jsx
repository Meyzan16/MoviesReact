import { useEffect } from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector,useDispatch } from "react-redux";
import { getApiConfigurations,getGenres } from "./store/usehomeslice";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/Page';
import SearchResult from "./pages/searchresult/SearchResult";

function App() {
  const dispatch = useDispatch();

  //ambil url dari redux
  const {url} = useSelector((state)=>state.home); 
  

  useEffect(() => {
    fetchApiConfig()
    genreCall();
  }, []);

  const fetchApiConfig = () => {
    //ambil api dan tambahkan params configurations
    fetchDataFromApi('/configuration').then((res) => {
      console.log(res)

      //simpan url dan kembalikan ke redux agar bisa di ambil
      const url = {
        backdrop:res.images.secure_base_url + "original",
        poster:res.images.secure_base_url + "original",
        profile:res.images.secure_base_url + "original"
      }
      //kirim ke redux url
      dispatch(getApiConfigurations(url))
    })
  }

  const genreCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    //ambil api tv dan movie
    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    //ambil data api dari masing masing key
    const data = await Promise.all(promises);
    console.log(data);

    //looping data tersebut dan simpan di varibel allgenres
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item ))
    })

    //simpan ke dalam redux state
    dispatch(getGenres(allGenres))

  }

 
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/:mediaType/:id" element={<Details />}  /> 
            <Route path="/search/:query" element={<SearchResult />}  />
            <Route path="/explore/:mediaType" element={<Explore />}  />
            <Route path="*" element={<PageNotFound />}  />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

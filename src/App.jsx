import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import Main from './components/Main';
import VideoCard from './components/VideoCard/VideoCard';


function App() {
  const data = [{ name: "MIB", genre: "Sci-Fi" }, { name: "VTV", genre: "Romance" },
  { name: "VTV", genre: "Romance" }, { name: "VTV", genre: "Romance" }];

  return (
    <>
      {
        data.map((movie, index) => (


          <VideoCard data={movie} key={`movie-card-${index}`} />
        ))}

    </>
  );

}

export default App;

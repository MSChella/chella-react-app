import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import Main from './components/Main';
import VideoCard from './components/VideoCard/VideoCard';


function App() {
  const data = ["", "", "", ""];

  return (
    <>
      {
        data.map((d, index) => (


          <VideoCard key={`movie-card-${index}`} />
        ))}

    </>
  );

}

export default App;

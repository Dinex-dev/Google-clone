import './App.css';
import Body from './components/Body/Body';
import TopNav from './components/TopNavigation/TopNav';
import data from "./data.json";
function App() {
  return (
    <div>
      <TopNav SearchTerm={data.SearchTerm} Image={data.ProfileIcon}/>
      <Body data={data}/>
    </div>
  );
}

export default App;

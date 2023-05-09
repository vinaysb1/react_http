import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterOne from './Components/HookCounterOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';

function App() {
  return (
    <div className="App">
     <DataFetching />
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <PostForm /> */}
    {/* <PostList /> */}
    </div>
  );
}

export default App;

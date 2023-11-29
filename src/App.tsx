
import './App.css';
import { SignUp } from './components/Title/Title'
import { Header } from './components/Header/Header'
import {Tabs} from './components/Tabs/Tabs';
import { PostsList } from './components/PostsList/PostsList';





function App() {
  return (
    <>
    <Header/>
    <Tabs/>
    <PostsList/>
    </>
  );
}

export default App;

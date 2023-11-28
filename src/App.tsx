
import './App.css';
import { SignUp } from './components/Title/Title'
import { Header } from './components/Header/Header'
import {Tabs} from './components/Tabs/Tabs';
import { BigCard } from './components/Cards/BigCard/BigCard';
import { MediumCard } from './components/Cards/MediumCard/MediumCard';
import { SmallCard } from './components/Cards/SmallCard/SmallCard'
import { PostsList } from './components/Cards/PostsList';





function App() {
  return (
    <>
    <Header/>
    {/* <Tabs/> */}
    <PostsList/>
    {/* <SignUp name={'Sign In'}/>
    
    <BigCard/>
    <MediumCard/>
    <SmallCard/> */}
    {/* <TabsWrapper/> */}
    </>
  );
}

export default App;

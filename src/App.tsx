
import './App.css';
import { SignUp } from './components/Title/Title'
import { Header } from './components/Header/Header'
import {Tabs} from './components/Tabs/Tabs';
import { PostsList } from './components/PostsList/PostsList';
import { SignInPage } from './pages/SignInPage/SignInPage';
import {Success} from './pages/Success/Success'
import { Blog } from './components/Blog/Blog';
import { ContentPage } from './components/Blog/Pages/ContentPage/ContentPage';
import { Main } from './Main';
import { Footer } from './components/Footer/Footer';


function App() {

  

  return ( 
    <div >
    <Header />
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;

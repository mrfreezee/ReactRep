
import './App.css';
import { SignUp } from './components/Title/Title'
import { Header } from './components/Header/Header'
import { Tabs } from './components/Tabs/Tabs';
import { PostsList } from './components/PostsList/PostsList';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { Success } from './pages/Success/Success'
import { Blog } from './components/Blog/Blog';
import { ContentPage } from './components/Blog/Pages/ContentPage/ContentPage';
import { Footer } from './components/Footer/Footer';
import { RequierAuth } from './helpers/RequireAuth';
import { Layout } from './components/Layout/Layout';
import { NewPasswordPage } from './pages/NewPasswordPage/NewPasswordPage';
import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { ResetPasswordPage2 } from './pages/ResetPasswordPage/ResetPasswordPage2';
import { RegistrationConfirmation } from './pages/RegistrationConfirmationPage/RegistrationConfirmationPage';
import { Error404 } from './pages/Errror404Page/Error404Page';
import { SinglePost } from './components/singlepost/singlepost';
import { AddPost } from './pages/AddPostPage/AddPostPage';

// http://localhost:3000/

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Blog/>}/>
        <Route path='signin' element={<SignInPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='success' element={<Success/>}/>
        <Route path='resetpasswordpage' element={<ResetPasswordPage/>}/>
        <Route path='resetpasswordpage2' element={<ResetPasswordPage2/>}/>
        <Route path='newpasswordpage' element={<NewPasswordPage/>}/>
        <Route path='registrationconfirmation' element={<RegistrationConfirmation/>}/>
        <Route path='singlepost/:id' element={<SinglePost/>}/>
        <Route path='addpost' element={
          // <RequierAuth>
          //   <AddPost/>
          // </RequierAuth>
<AddPost/>
        }/>


      </Route>
      <Route path='*' element={<Error404/>}/>

    </Routes>
  );
}

export default App;

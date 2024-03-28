import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './pages/Main';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Funding from './pages/Funding';
import Popup from './pages/Popup';
import InitMypage from './pages/MyPage/InitMypage';
import DetailMypage from './pages/MyPage/DetailMypage';
import KakaoLogin from './pages/Login/KakaoLogin';
import Profile from './pages/MyPage/Profile';
import UserInfo from './pages/MyPage/UserInfo';
import Deliver from './pages/MyPage/Deliver';
import Alert from './pages/MyPage/Alert';
import EditProfile from './pages/MyPage/EditProfile';
import Grading from './components/MyPage/MainContent/Grading';
import { RecoilRoot } from 'recoil';
import Community from './pages/Community';
import Ingredients from './pages/Community/Ingredients';
import Recipe from './pages/Community/Recipe';
import Buying from './pages/Buying/Buying';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import Cart from './pages/Cart';
import NaverLogin from './pages/Login/NaverLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: '/user/oauth/signin/kakao', element: <KakaoLogin /> },
      { path: '/user/oauth/signin/naver', element: <NaverLogin /> },
      { path: '/login', element: <Login /> },
      { path: '/intro', element: <Intro /> },
      { path: '/funding/buying', element: <Buying /> },
      { path: '/funding', element: <Funding /> },
      { path: '/popup', element: <Popup /> },
      { path: '/mypage', element: <InitMypage /> },
      { path: '/mypage/detail', element: <DetailMypage /> },
      { path: '/community', element: <Community /> },
      { path: '/ingredients/:ingredient', element: <Ingredients /> },
      { path: '/recipes/:recipe', element: <Recipe /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/mypage/profile',
        element: <Profile />,
        children: [
          {
            path: 'userInfo',
            element: <UserInfo />,
          },
          {
            path: 'deliver',
            element: <Deliver />,
          },
          {
            path: 'alert',
            element: <Alert />,
          },
          { path: 'edit-profile', element: <EditProfile /> },
        ],
      },
      { path: '/auth', element: <Login /> },
      { path: '/grading', element: <Grading /> },
      { path: '/payment', element: <Payment /> },
    ],
  },
]);

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

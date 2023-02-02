/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/auth/Login";
import SignUp from "../routes/auth/SignUp";

import LoginAdmin from "../routes/admin/LoginAdmin";
import TotalChart from "../routes/admin/TotalChart";
import RevenueTrend from "../routes/admin/RevenueTrend";
import TotalUseageChart from "../routes/admin/TotalUseageChart";
import UserLog from "../routes/admin/UserLog";
import UserToU from "../routes/auth/UserToU";
import CompletePage from "../routes/auth/CompletePage";
import SearchId from "../routes/auth/SearchId";
import KakaoMap from "../routes/KakaoMap";
import MyPage from "../routes/auth/MyPage";
import ModifyUserInfo from "../routes/auth/ModifyUserInfo";
import ModifyPwd from "../routes/auth/ModifyPwd";
import SearchPwd from "../routes/auth/SearchPwd";
import Payment from "../routes/auth/Payment";
import SearchChangePwd from "../routes/auth/SearchChangePwd";
import SearchIdResultPage from "../routes/auth/SearchIdResultPage";
import Users from "../routes/admin/Users";

import Test from "../../src/Test";

export const GlobalStyle = css`
  body {
    margin: 0px;
  }
`;
function App() {
  return (
    // <div className="App" css={globalStyle}>
    <Router>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/bp/login" element={<Login />}></Route>
        <Route path="/bp/signup" element={<SignUp />}></Route>
        <Route path="/bp/terms" element={<UserToU />}></Route>
        <Route path="/bp/complete" element={<CompletePage />}></Route>
        <Route path="/bp/search/id" element={<SearchId />}></Route>
        <Route
          path="/bp/search/id/result"
          element={<SearchIdResultPage />}
        ></Route>
        <Route path="/bp/search/pwd" element={<SearchPwd />}></Route>
        <Route
          path="/bp/search/change/pwd"
          element={<SearchChangePwd />}
        ></Route>
        <Route path="/bp/map" element={<KakaoMap />}></Route>
        <Route path="/bp/mypage" element={<MyPage />}></Route>
        <Route path="/bp/modify/user" element={<ModifyUserInfo />}></Route>
        <Route path="/bp/modify/pwd" element={<ModifyPwd />}></Route>
        <Route path="/bp/payment" element={<Payment />} />

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/total-income" element={<TotalChart />} />
        <Route path="/admin/total-useage" element={<TotalUseageChart />} />
        <Route path="/admin/revenue-trend/:id" element={<RevenueTrend />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/users/:id" element={<UserLog />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;

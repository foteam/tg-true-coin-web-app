import { useEffect } from "react";
import {
  Routes,
    Navigate,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Main from "./pages/main/Main";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  //CHECKING MOBILE
  const isMobile = /iphone|ipad|ipod|android/g.test(window.navigator.userAgent.toLowerCase());



  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        {/*<Route path="/" element={<Main />} />*/}
        <Route path="/">
          {isMobile ? (<Navigate to="/mobile" />) : (<Navigate to="/desktop"/>)}
        </Route>
        <Route path="/mobile" element={<h1>is Mobile</h1>}/>
        <Route path="/desktop" element={<h1>is Desktop</h1>}/>
      </Routes>
  );
}
function DesktopPage() {
  return <h1>Desktop not supported!</h1>
}
export default App;

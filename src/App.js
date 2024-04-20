import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
    redirect
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
      <Router>
        <Routes>
          <Route path="/" >
            {isMobile ? (redirect("/main")) : (redirect("/desktop"))}
            <Route path="/main" element={<Main/>}/>
            <Route path="/desktop" component={DesktopPage}/>
          </Route>
        </Routes>
      </Router>
  );
}
function DesktopPage() {
  return <h1>Desktop not supported!</h1>
}
export default App;

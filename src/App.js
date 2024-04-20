import { useEffect } from "react";
import {
  Routes,
  Route,
    redirect,
  useNavigationType,
  useLocation
} from "react-router-dom";

import Main from "./pages/main/Main";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  //CHECKING MOBILE
  const isMobile = /Mobi/.test(window.navigator.userAgent);

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
      <Route path="/" >
        {isMobile ? (redirect("main")) : (redirect("desktop"))}
        <Route path="main" element={<Main/>}/>
        <Route path="desktop" component={DesktopPage}/>
      </Route>
    </Routes>
  );
}
function DesktopPage() {
  return <h1>Desktop not supported!</h1>
}
export default App;

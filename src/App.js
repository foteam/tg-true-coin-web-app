import { useEffect } from "react";
import {
  Routes,
    Navigate,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Main from "./pages/main/Main";
const tg = window.Telegram.WebApp;

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    tg.expand();
    tg.setHeaderColor("FF000000")
  })
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
        <Route path="/" element={<Main />} />
      </Routes>
  );
}
function DesktopPage() {
  return <h1>Desktop not supported!</h1>
}
export default App;

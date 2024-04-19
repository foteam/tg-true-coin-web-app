import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(()=>{
        tg.ready();
    }, [])
    const onClose = () => {
        tg.close();
    }
  return (
    <div className="App">
      YOUR NAME: {tg.initData.user.first_name}
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;

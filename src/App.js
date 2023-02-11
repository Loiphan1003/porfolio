import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

import axios from 'axios'

function App() {

  const [demos, setDemos] = React.useState([]);
  const [info, setInfo] = React.useState({});

  React.useEffect( () => {

    const fetchData = async () => {
    await axios.get('https://porfolio-api-six.vercel.app/info')
      .then((res) => setInfo(res.data))

      await axios.get('https://porfolio-api-six.vercel.app/demo')
      .then((res) => setDemos(res.data))
    }

    fetchData();
  }, [])


  return (
    <div className="App">
      <Header  />
      <Content />
      {demos.length > 0 && <Project data={demos}/>}
      <Contact />
    </div>
  );
}

export default App;

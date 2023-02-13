import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

import axios from 'axios'

function App() {
  const refC = React.useRef();
  const refD = React.useRef();
  const refCon = React.useRef();

  const [selectMenu, setSelectMenu] = React.useState();


  const [demos, setDemos] = React.useState([]);
  const [info, setInfo] = React.useState({
    name: '',
    image: '',
  });

  React.useEffect( () => {

    const fetchData = async () => {
    await axios.get('https://porfolio-api-six.vercel.app/info')
      .then((res) => setInfo(res.data))

      await axios.get('https://porfolio-api-six.vercel.app/demo')
      .then((res) => setDemos(res.data))
    }

    fetchData();
  }, [])


  React.useEffect(() => {
    if(selectMenu === 0){
      return refCon.current?.scrollIntoView({behavior: 'smooth'});
    }
    if(selectMenu === 1){
      return refD.current?.scrollIntoView({behavior: 'smooth'});
    }
    if(selectMenu === 2){
      return refC.current?.scrollIntoView({behavior: 'smooth'});
    }
    // console.log(refC);
  }, [selectMenu])

  return (
    <div className="App">
      <Header isSelect={selectMenu} select={setSelectMenu}/>
      <Content getref={refCon} data={info} />
      {demos.length > 0 && <Project getref={refD} data={demos}/>}
      <Contact getref={refC} data={info} />
      <Footer  />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { Box } from "@chakra-ui/react";
import { getDocument } from "./config/firebase/firestore";

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
      getDocument('info').then((result) => setInfo(result));

      getDocument('demos').then((result) => setDemos(result));
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
  }, [selectMenu])

  return (
    <Box className="App" 
      // margin={{ '2xl': '0px 250px'}}
    >
      <Header isSelect={selectMenu} select={setSelectMenu}/>
      <Content getref={refCon} data={info} />
      {demos.length > 0 && <Project getref={refD} data={demos}/>}
      <Contact getref={refC} data={info} />
      <Footer  />
    </Box>
  );
}

export default App;

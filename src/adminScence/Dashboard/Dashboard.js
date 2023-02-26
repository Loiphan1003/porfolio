import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import Tables from "./Tables";

function Dashboard(props) {
  const navigate = useNavigate();

  const [select, setSelect] = React.useState('info')
  


  React.useEffect(() => {
      if(sessionStorage.getItem("porfolioAdmin", "loiphan1003") == null)
          return navigate('/admin')
  }, [navigate])

  



  return (
    <Box p="20px 20%" h="100vh" >
      Dashboard admin

      <Tabs>
        <TabList>
            <Tab
                onClick={() => setSelect('info')}
            >Thông tin</Tab>
            <Tab
                onClick={() => setSelect('demos')}
            >Sản phẩm</Tab>
        </TabList>
      </Tabs>

      <Tables type={select} />

    </Box>
  );
}

export default Dashboard;

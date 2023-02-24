import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { Spinner, extendTheme } from "@chakra-ui/react";


// admin components
import Login from "./adminScence/Login";
import Dashboard from "./adminScence/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/porfolio/",
    element: <App />,
  },
  {
    path: `/admin`,
    element: <Login />,
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />
  }
]);

const theme = extendTheme({
  fonts: {
    body: "Be Vietnam Pro, sans-serif",
  }
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<Spinner size='xl' />}/>
    </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

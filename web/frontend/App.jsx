import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import { React, useState, useEffect } from "react";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import { Table } from "./components/Table";
import { FormP } from "./components/Form";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const componentes = import.meta.globEager("./components/**/!(*.test.[jt]sx)*.([jt]sx)");
  // console.log(componentes,'miralo');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data);

  const datos= data.length > 0?data:[];
  console.log(datos);

  
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
                <Routes pages={pages} />
                <Table data={datos}></Table>
                <FormP ></FormP>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}

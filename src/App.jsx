import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Points from "./tabs/Points";
import Props from "./tabs/Props";
import Todos from "./tabs/Todos";
import Photos from "./tabs/Photos";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Photos</Tab>
        <Tab>Todos</Tab>
        <Tab>Points</Tab>
        <Tab>Props</Tab>
      </TabList>

      <TabPanel>
        <Photos />
      </TabPanel>
      <TabPanel>
        <Todos />
      </TabPanel>
      <TabPanel>
        <Points />
      </TabPanel>
      <TabPanel>
        <Props />
      </TabPanel>
    </Tabs>
  );
}

export default App;

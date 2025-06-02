import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Points from "./tabs/Points";
import Props from "./tabs/Props";
import Todos from "./tabs/Todos";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Todos</Tab>
        <Tab>Points</Tab>
        <Tab>Props</Tab>
      </TabList>

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

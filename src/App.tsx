import './App.css';
import Category from './data/Category';

import CategoryInventionPanel from "./category/CategoryInventionPanel";

import {TabList, Tab, Tabs, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          {Object.values(Category).map((category, index) =>
            <Tab key={index}>{category}</Tab>
          )}
        </TabList>

        {Object.values(Category).map((category,index) =>
          <TabPanel key={index}>
            <CategoryInventionPanel category={category}/>
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
}

export default App;

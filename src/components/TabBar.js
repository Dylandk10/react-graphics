import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import SalesPage from './SalesPage';
import TransactionPage from './transactionPage';

const TabBar = () => {
    const [key, setKey] = useState("Sales");


    return (
        <Tabs
        id="tabbar"
        className="smallPushDown"
        unmountOnExit={true}
        mountOnEnter={true}
        activeKey={key}
        onSelect={(k) => setKey(k)}
        defaultActiveKey="Sales"
      >
        <Tab eventKey="Sales" title="Sales">
            <SalesPage />
        </Tab>

        <Tab eventKey="Transactions" title="Transactions">
           <TransactionPage />
        </Tab>
      </Tabs>
    )
}

export default TabBar;
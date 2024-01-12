import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const TransactionDropDown = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="transactionContainer">
            <div className="transactionMain"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            <p>Order Numbber: {props.data.order_number} </p>
            <p>Date: {props.data.date} </p>
         </div>
         <div className="transactionDropDown">
            <Collapse in={open}>
            <div id="example-collapse-text" className="tDropDown">
                <p>
                    Revenue: {'$' + props.data.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </p>
                <p>
                    Number of orders: {props.data.numberOfOrders}
                </p>
            </div>
        </Collapse>
        </div>
        </div>
    )
};

export default TransactionDropDown;
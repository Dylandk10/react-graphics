import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import useWindowDimensions from '../utilities/windowsise';

const LineGraphs = (props) => {
    const { height, width } = useWindowDimensions();
    const [filter, setFilter] = useState("revenue");

    const updateFilter = (value) => {
        setFilter(value);
    };

    return (

        <Container fluid="md salesContainer">
        <Row>
        <Col lg>
           <h3>Filter</h3>
           <select onChange={(e) => updateFilter(e.target.value)}>
                <option value="revenue">Revenue</option>
                <option value="numberOfOrders">Orders</option>
            </select> 

            <p>
                The revenue displayed by the sales from last month. As seen, these sales are filtered
                by number of orders or by revenue.
            </p>
           </Col>
           {width >= 700 ?

          <Col>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart width={600} height={300} data={props.data} className="lineChart">
                <Line type="monotone" dataKey={filter} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
           </Col>
            //if the width is smaller than 700 render this
           :

           <Col>
          
          
           <ResponsiveContainer width="100%" height={300}>
           <LineChart width={600} height={300} data={props.data} className="lineChart">
               <Line type="monotone" dataKey={filter} stroke="#8884d8" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis />
               <YAxis />
               <Tooltip />
           </LineChart>
           </ResponsiveContainer>
          </Col>
          }


        </Row>
      </Container>

    )

};

export default LineGraphs;
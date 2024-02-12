import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LineGraphUsers = (props) => {




    return (

        <Container className="salesContainer">
        <Row>
        <Col sm>

            <p>
                As shown here is the user data for the amount of users driving sales. Once again you can filter
                by the number of orders or by the number of revenue the user has brought on.
            </p>
            <p>
                New users are not shown as the amount of time is needed for the user to accumulate sales. So, until the
                user hits the threshold, the user is not counted
            </p>
           </Col>

          <Col md>
          <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={400}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="order_number" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="numberOfOrders" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
          </ResponsiveContainer>
           </Col>


        </Row>
      </Container>

    )

};

export default LineGraphUsers;
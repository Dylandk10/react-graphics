import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LineGraphs from './LineGraphs';
import Test_Data from './testdata';
import LineGraphUsers from './LineGraphUsers';

const SalesPage = () => {


    return (
        <Container fluid="md" className="pushDown"> 
        <Row>
            <h3>Sales and Orders </h3> <hr />
          <Col> <LineGraphs data={Test_Data} /> </Col>
        </Row>
        <Row className="smallPushDown">
            <h3>Users Driving Sales </h3> <hr />
          <Col> <LineGraphUsers data={Test_Data} /> </Col>
        </Row>

        <Row className="smallPushDown">
            <Col md className="salesContainer smallContainer">
                The sales for this column have no more than the info above.
                Taken from the new report filter the orders table by what is needed
                to display.
            </Col>

            <Col md className="salesContainer smallContainer"> 
                By Filtering the sales report the graphs will reflect any changes made.
                The graphs are dynamic in value and can be filter by the data attributes.
            </Col>

            <Col md className="salesContainer smallContainer">
                Finding the transaction tab, we get a in depth break down of the document and data.
                to better understand the data we need to take a form and minipulate it.
                
            </Col>
        </Row>
      </Container>
    )
};

export default SalesPage;
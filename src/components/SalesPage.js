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
      </Container>
    )
};

export default SalesPage;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LineGraphs from './LineGraphs';
import Test_Data from './testdata';

const SalesPage = () => {


    return (
        <Container fluid="md" class="pushDown"> 
        <Row>
            <h3>Sales and Orders </h3> <hr />
          <Col> <LineGraphs data={Test_Data} /> </Col>
        </Row>
      </Container>
    )
};

export default SalesPage;
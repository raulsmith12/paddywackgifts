import { Jumbotron, Row, Col } from 'reactstrap';
import Slider1 from '../components/Slider1';
import Slider2 from '../components/Slider2';
import Slider3 from '../components/Slider3';

const Head = () => (
	<Jumbotron>
        <img src="https://paddywackgifts.com/img/banner_white.png" width="50%" />
        <Row>
            <Col className="col-4">
                <Slider1 />
            </Col>
            <Col className="col-4">
                <Slider2 />
            </Col>
            <Col className="col-4">
                <Slider3 />
            </Col>
        </Row>
    </Jumbotron>
);

export default Head;

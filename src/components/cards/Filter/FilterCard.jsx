import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BaseButton from '../../button/Button';
import './FilterCard.css';

function FilterCard() {
    return(
        <Card className="filter-card">
            <Card.Title className="text-white mb-0">Filter by:</Card.Title>
            <Card.Body className="pl-0 pb-0">
                <Row>
                    <Col md={4}>
                        <BaseButton text="1D" style={{width: "36px", height: "36px", fontSize: "14px", paddingLeft: "0", paddingRight: "0", backgroundColor: "#3e426b", border: "1px solid #3e426b"}} />
                    </Col>

                    <Col md={4}>
                        <BaseButton text="1M" style={{width: "36px", height: "36px", fontSize: "14px", paddingLeft: "0", paddingRight: "0"}} />
                    </Col>

                    <Col md={4}>
                        <BaseButton text="1Y" style={{width: "36px", height: "36px", fontSize: "14px", paddingLeft: "0", paddingRight: "0", backgroundColor: "#3e426b", border: "1px solid #3e426b"}} />
                    </Col>
                </Row>
            </Card.Body>      
        </Card>
    )
}

export default FilterCard;
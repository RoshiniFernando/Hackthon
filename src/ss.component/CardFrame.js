import React,{Component} from 'react';
import OurCard from './OurCard';
import Col from "reactstrap/es/Col";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";

class CardFrame extends Component{
    state = {
        locations : [
    {name: "Nuwara Eliya"},
    {name: "Kandy"},
    {name: "Jaffna"},
    {name: "Colombo"},

        ]
}
render() {
let details = this.state.locations.map(singleLocation=>{
        return(
            <Col>
                <OurCard details = {singleLocation}/>
            </Col>
        )
    });
return(
    <div>
        <Container>
            <Row>
                {details}
            </Row>
        </Container>
    </div>
)
}
}

export default CardFrame;
import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const OurCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://cdn.wallpapersafari.com/92/99/OYxX3b.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.details.name}</CardTitle>
                    <CardText>This is a preview of a card and we can select this,go inside and view the descripition and fill the forms and book services.</CardText>
                    <Button>See More...</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default OurCard;
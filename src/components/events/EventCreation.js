import { withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import {getDomain} from "../../helpers/getDomain";
import Event from "../shared/models/Event";

class EventCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,

            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null,

            street:null,
            city:null,
            zip: null,

            englishText:null,
            germanText: null,
            diet: false,

            sbb: false,
            esnCardHalbtax: null,
            esnCardPrice: null,
            noCardHalbtax: null,
            noCardPrice: null
        };
    }

    createEvent() {
        console.log(this.state);

        fetch(`${getDomain()}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: this.state.title,
                englishText: this.state.englishText,
                germanText: this.state.germanText,
                address: this.state.street,
                city: this.state.city,
                zip: this.state.zip,
                startDate: this.state.startDate + 'T' + this.state.startTime,
                endDate: this.state.endDate + 'T' + this.state.endTime,
                diet: this.state.diet,
                fullPrice: this.state.fullPrice,
                esnPrice: this.state.esnPrice,
                esnHalbtaxPrice: this.state.esnHalbtaxPrice,
                noEsnHalbtaxPrice: this.state.noEsnHalbtaxPrice
            })
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    alert("Creating the event didn't work, some forms were wrong!");
                }
                else {
                    response.json()
                        .then(returnedEvent => {
                            const event = new Event(returnedEvent);
                            console.log(event);
                        })
                }
            })
            .catch(err => {
                console.log(err);
                alert(`Something went wrong during the event creation.`);
            });
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    handleCheckboxChange(key) {
        this.setState({[key]: !this.state.key})
    }

    handleSbb() {
        this.setState({sbb: !this.state.sbb});
        if(!this.state.sbb) {
            this.setState({esnCardHalbtax: null, noCardHalbtax: null})
        }
    }

    componentDidMount() {}

    render() {
        return (
            <>
            <Form style={{marginLeft: 5 + 'em', marginRight: 5 + 'em'}}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder="Esn goes to Zurich"
                        onChange={e => {this.handleInputChange("title", e.target.value);}}
                    />
                </Form.Group>
                <Form.Check
                    type="switch"
                    id="onlyPlanned"
                    label="Only Planned"
                />
                <Form.Group as={Col} controlId="eventType">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control as="select">
                        <option>Select one</option>
                        <option>Weekly Meetup</option>
                        <option>Internal Event</option>
                        <option>Small Event</option>
                        <option>Day or weekend Trip</option>
                    </Form.Control>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDates">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control
                            placeholder="Enter here.."
                            type = "date"
                            formatDate = "yyyy-mm-dd"
                            onChange={e => {this.handleInputChange("startDate", e.target.value);}}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Start time</Form.Label>
                        <Form.Control
                            placeholder="Enter here.."
                            type = "time"
                            formatDate = "hh-mm"
                            onChange={e => {this.handleInputChange("startTime", e.target.value);}}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                            placeholder="Enter here.."
                            type = "date"
                            formatDate = "yyyy-mm-dd"
                            onChange={e => {this.handleInputChange("endDate", e.target.value);}}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>End time</Form.Label>
                        <Form.Control
                            placeholder="Enter here.."
                            type = "time"
                            formatDate = "hh-mm"
                            onChange={e => {this.handleInputChange("endTime", e.target.value);}}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            placeholder="Rämistrasse 101"
                            onChange={e => {this.handleInputChange("street", e.target.value);}}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            placeholder="Zurich"
                            onChange={e => {this.handleInputChange("city", e.target.value);}}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            placeholder="8001"
                            onChange={e => {this.handleInputChange("zip", e.target.value);}}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="englishText">
                    <Form.Label>English Text</Form.Label>
                    <Form.Control as="textarea" rows="6"
                                  onChange={e => {this.handleInputChange("englishText", e.target.value);}}
                    />
                </Form.Group>

                <Form.Group controlId="germanText">
                    <Form.Label>German Text</Form.Label>
                    <Form.Control as="textarea" rows="6"
                                  onChange={e => {this.handleInputChange("germanText", e.target.value);}}/>
                </Form.Group>

                <Form.Group id="checkboxGrid">
                    <Form.Check type="checkbox" label="Diet (Vegetarian, etc.) info required"
                                onChange={e => {this.handleCheckboxChange("diet");}}/>
                    <Form.Check type="checkbox" label="SBB info required"
                                onChange={e => {this.handleSbb(e);}}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="priceGrid">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="with ESN Card" />
                        </Col>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="without ESN Card" />
                        </Col>
                    </Form.Group>
                    {this.state.sbb && <Form.Group as={Col} controlId="withSbbGrid">
                        <Form.Label>With Halbtax / below 25</Form.Label>
                        <Form.Control placeholder="10"
                                      onChange={e => {this.handleInputChange("esnHalbtaxPrice", e.target.value);}}/>
                        <Form.Control placeholder="20"
                                      onChange={e => {this.handleInputChange("noEsnHalbtaxPrice", e.target.value);}}/>
                    </Form.Group>}
                    <Form.Group as={Col} controlId="withoutSBBGrid">
                        <Form.Label>General Prices</Form.Label>
                        <Form.Control placeholder="30"
                                      onChange={e => {this.handleInputChange("esnPrice", e.target.value);}}/>
                        <Form.Control placeholder="40"
                                      onChange={e => {this.handleInputChange("fullPrice", e.target.value);}}/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="Submit"
                        onClick={(e) => {
                            e.preventDefault();
                            this.createEvent();
                            alert("A new one was created");
                        }}>
                    Submit and stay (for multiple events)
                </Button>

                <Button variant="primary" type="Submit"
                        onClick={(e) => {
                            e.preventDefault();
                            this.createEvent();
                            this.props.history.push("/events");
                        }}>
                    Submit and continue
                </Button>
            </Form>
            </>
        );
    }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(EventCreation);

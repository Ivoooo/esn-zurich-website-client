import React from "react";
import {withRouter} from "react-router-dom";
import {getDomain} from "../../helpers/getDomain";
import Table from "react-bootstrap/Table";


class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.eventId,
            event: null,
        }
    }

    getEvent() {
        fetch(`${getDomain()}/events/${this.state.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    alert("Something went wrong getting the events!");
                }
                else {
                    response.json()
                        .then(returnedEvent => {
                            this.setState({ event: returnedEvent });
                            console.log(this.state.event);
                        })
                }
            })
            .catch(err => {
                console.log(err);
                alert(`Something went wrong during the event creation.`);
            });
    }

    componentDidMount() {
        this.getEvent()
    }

    render() {
        return (
            <>
                {this.state.event != null &&
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{this.state.event.title}</td>
                        </tr>
                        <tr>
                            <td>Start Date</td>
                            <td>{this.state.event.startDate}</td>
                        </tr>
                        <tr>
                            <td>End Date</td>
                            <td>{this.state.event.endDate}</td>
                        </tr>
                        <tr>
                            <td>Full Price</td>
                            <td>{this.state.event.fullPrice}</td>
                        </tr>
                        <tr>
                            <td>ESN Price</td>
                            <td>{this.state.event.esnPrice}</td>
                        </tr>
                        <tr>
                            <td>English Text</td>
                            <td>{this.state.event.englishText}</td>
                        </tr>
                        <tr>
                            <td>German Text</td>
                            <td>{this.state.event.germanText}</td>
                        </tr>
                        <tr>
                            <td>max Participants</td>
                            <td>{this.state.event.maxParticipants}</td>
                        </tr>
                        <tr>
                            <td>subsidy Approved</td>
                            <td>{this.state.event.subsidyApproved}</td>
                        </tr>
                        <tr>
                            <td>subsidy requested</td>
                            <td>{this.state.event.subsidyRequested}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{this.state.event.city}</td>
                        </tr>
                    </tbody>
                </Table>}
            </>
        );
    }
}
export default withRouter(EventPage);
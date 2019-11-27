import React from "react";
import { withRouter } from "react-router-dom";
import {getDomain} from "../../helpers/getDomain";
import Table from "react-bootstrap/Table";

class EventsOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    getEvents() {
        fetch(`${getDomain()}/events`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw response;
                }
                else {
                    response.json()
                        .then(returnedEvents => {
                            if(returnedEvents._embedded == null) return;
                            const eventList1 = returnedEvents._embedded.eventList;
                            this.setState({ events: eventList1 });
                            console.log(this.state.events);
                        })
                }
            })
            .catch(err => {
                console.log(err);
                alert(`Something went wrong getting the events.`);
            });
    }

    componentDidMount() {
        this.getEvents();
    }

    render() {
        return (
            <>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>esn Price</th>
                        <th>full Price </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.events.map(event => {
                        return (
                            <tr onClick={() => {
                                this.props.history.push(`/events/${event.id}`)}
                            }>
                                <td>{event.id}</td>
                                <td>{event.title}</td>
                                <td>{event.startDate}</td>
                                <td>{event.endDate}</td>
                                <td>{event.esnPrice}</td>
                                <td>{event.fullPrice}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default withRouter(EventsOverview);
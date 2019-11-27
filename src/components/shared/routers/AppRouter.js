import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import EventCreation from "../../events/EventCreation";
import EventsOverview from "../../events/EventsOverview";
import EventPage from "../../events/EventPage";


//todo some of the game and app routers should be guarded.
class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to={"/events"} />} />
                    <Route
                        path ="/createEvent"
                        exact
                        render={() => (
                            <EventCreation />
                        )}
                    />
                    <Route
                        path ="/events"
                        exact
                        render={() => (
                            <EventsOverview />
                        )}
                    />
                    <Route
                        path ="/events/:eventId"
                        component={EventPage}
                        exact
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default AppRouter;

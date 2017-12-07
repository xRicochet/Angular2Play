import { Component, Input } from "@angular/core";
import { ISession } from "../index";


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/event-sessions.component.html',
})
export class EventSessionsListComponent {
    @Input() sessions: ISession[]
}
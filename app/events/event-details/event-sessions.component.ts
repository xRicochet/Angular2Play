import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../index";


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/event-sessions.component.html',
})
export class EventSessionsListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() visibleSessions: ISession[];
    @Input() filterBy: String;

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter: String) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }

}
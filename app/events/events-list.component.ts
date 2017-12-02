import { Component } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `
    <div>
        <h1>Ceva Evenimente</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
            <div>
        </div>
    </div>
    `
})
export class EventsListComponent {
    events: any
    constructor(private eventService: EventService, private toastrService: ToastrService, private route:ActivatedRoute) {
    }
 
    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName: String) {
        this.toastrService.success(eventName);
    }
}
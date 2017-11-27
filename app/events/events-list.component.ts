import { Component } from "@angular/core";


@Component({
    selector: 'events-list',
    // templateUrl: 'app/events/events-list.component.html'
    template: `
    <div>
        <h1>Ceva Evenimente</h1>
        <hr/>
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Eveniment #1',
        date: '9/26/2016',
        time: '10:00am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Iasi',
            country: 'RO'
        }
    }
}
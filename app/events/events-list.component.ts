import { Component } from "@angular/core";


@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent {
    event = {
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
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-route-activator.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [EventRouteActivator, EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}
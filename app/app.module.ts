import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventRouteActivator
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component,
    ],
    providers: [
        EventRouteActivator,
        EventService,
        ToastrService,
        EventListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("Unsaved work. U rlly wanna leave?")
    return false
}
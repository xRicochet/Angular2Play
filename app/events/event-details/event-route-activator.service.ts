import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { EventService } from "../index";

@Injectable()
export class EventRouteActivator implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        if(!eventExists)
            this.router.navigate(['/404']);
        return eventExists
    }
      constructor(private eventService: EventService, private router: Router){

    }

}
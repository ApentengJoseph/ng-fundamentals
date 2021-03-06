import { Routes } from "@angular/router";
import { Error404Component } from "./error/404.component";
import { EventDetailsComponent } from "./events/event-details/event-detail.comoponent";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";

export const appRoutes:Routes = [
    {path:'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path:'404', component:Error404Component},
    {path: '', redirectTo:'/events', pathMatch: 'full'} , 
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]
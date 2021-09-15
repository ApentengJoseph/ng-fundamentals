import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
    <h1>New Event</h1>
    <br>
    <div class="col-md-6">
        <h3>[Create Events Form will go here]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="cancel()">Cancel </button>

    
    `
})

export class CreateEventComponent {
    isDirty:boolean=true
    constructor(private router:Router){}

   cancel() {
    this.router.navigate(['/events'])
   }
}
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable(  
)
export class NavigationService {
    
    constructor( private _router: Router,
    private route : ActivatedRoute,
    ){}


    navigateTo(path:string)
    {
        this._router.navigate([path])
        .then(() => console.log("navigated to " + path))
        .catch(err => console.log("error navigating to "+path +" + err"));
    }
    
    navigateWithIDTo(path:string,Id:string)
    {
        this._router.navigate([path, Id], { relativeTo: this.route })
        .then(() => console.log("navigated to " + path + "withId: "+ Id))
        .catch(err => console.log("error navigating to "+path +" + err"));
    }

}

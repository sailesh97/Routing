import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { } // To navigate we need to get access to our router. Injecting the angular router in this component to get the same instance of router in which we registered our routes.


  ngOnInit() {
  }

  onLoadServers(){
    this.router.navigate(["/servers"]);
    // The parameter that navigate method takes is an array of element or elements depending on the path you want to get navigated to.
    // Just like we used in routerLink in a(HTML link) elements.
  }
}

/**
 * In app-module that array of routes was of type, Routes
 * 
 * Here we're using Router. 
 */
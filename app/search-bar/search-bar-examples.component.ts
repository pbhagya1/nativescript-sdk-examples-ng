import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic SearchBar", "/basicSearchBarComponent"),
    new Link("Clear SearchBar", "/clearSearchBarComponent"),
    new Link("SearchBar binding", "/searchBarBindingComponent")
];
     
@Component({
    selector: 'search-bar-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'search-bar/search-bar-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchBarExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
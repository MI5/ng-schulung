import * as angular from 'angular';
import {FlightSearchController} from "./flight-search/flight-search.controller";
import {PassengerService} from "./services/passengerSearch.service";
import {createPassengerStatusFilter} from "./filters/city.filter";

var app = angular.module('flight-app', []);

app.controller("flightSearch", FlightSearchController);

app.service("passengerService", PassengerService);
app.constant("baseURL", "http://www.angular.at");

app.filter("pStatus", createPassengerStatusFilter);
import * as angular from 'angular';
import {FlightSearchController} from "./flight-search/flight-search.controller";

var app = angular.module('flight-app', []);

app.controller("flightSearch", FlightSearchController);


import * as angular from 'angular';
import {Flight} from "../entities/flight";
import {PassengerService} from "../Services/passengerSearch.service";

export class FlightSearchController {

    /*
    private $http: angular.IHttpService;

    constructor($http: angular.IHttpService) {
        this.$http = $http;
    }
    vs.*/
    constructor (private passengerService: PassengerService) {}



    id: Number;
    name: string = 'Muster';
    firstName: string = 'Max';
    //noinspection JSUnusedGlobalSymbols
    passengerStatus: string;
    selectedFlight: Flight;

    passengers: Array<Flight> = [];

    search() {
        this.passengerService.find(this.firstName, this.name)
        .then(resp => {
                this.passengers = <any> resp.data;
            })
            .catch(resp => {
                console.error("Error fetching data via HTTP");
                console.error(resp);
            })
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }

}
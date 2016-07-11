import * as angular from 'angular';
import {Flight} from "../entities/flight";

export class FlightSearchController {

    private $http: angular.IHttpService;

    constructor($http: angular.IHttpService) {
        this.$http = $http;
    }

    id: Number;
    name: string = 'Muster';
    firstName: string = 'Max';
    passengerStatus: string;
    selectedFlight: Flight;

    passengers: Array<Flight> = [];

    search() {

        var url = "http://www.angular.at/api/passenger";
        var params = {
         //   id: this.id,
            name: this.name,
            firstname: this.firstName,
        //    passengerStatus: this.passengerStatus
        };

        this
            .$http
            .get(url, { params: params })
            .then(resp => {
                this.passengers =  <any> resp.data;
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
import * as angular from 'angular';
import {Flight} from "../entities/flight";

export class FlightSearchController {

    private $http: angular.IHttpService;

    constructor($http: angular.IHttpService) {
        this.$http = $http;
    }

    from: string = 'Graz';
    to: string = 'Hamburg';
    selectedFlight: Flight;

    passengers: Array<Flight> = [];

    search() {

        var url = "http://www.angular.at/api/passenger?name=Muster";
        var params = {
         //   from: this.from,
         //   to: this.to
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
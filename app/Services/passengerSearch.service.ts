import * as angular from 'angular';
import {Flight} from "../entities/flight";

export class PassengerService {

    constructor(
        private $http: angular.IHttpService,
        private baseURL: string) {
    }

    find(firstName: string, name: string): angular.IHttpPromise<Flight[]> {

        var url = this.baseURL + "/api/passenger";
        var params = {
            firstName: firstName,
            name: name
        };

        return this
            .$http
            .get(url, { params });


    }

}
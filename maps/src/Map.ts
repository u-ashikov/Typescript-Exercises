import { User } from './User';
import { Company } from './Company';

export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(containerId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(containerId), {
            zoom: 1,
             center: {
                 lat: 0,
                 lng: 0
             }
        });
    }

    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     });
    // }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
}
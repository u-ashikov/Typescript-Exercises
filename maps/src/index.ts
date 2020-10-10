import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
const map = new Map('map');

console.log(user);
console.log(company);
console.log(map);

// map.addUserMarker(user);
map.addMarker(company);
map.addMarker(user);
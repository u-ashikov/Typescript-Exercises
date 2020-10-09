const profile = {
    name: 'Alex',
    age: 20,
    coordinates: {
        lat: 0,
        lng: 15
    },
    setAge(newAge: number): void {
        this.age = newAge;
    }
}

const { age }: { age: number } = profile;
const { coordinates: { lat, lng}} : { coordinates: { lat: number; lng: number}} = profile;
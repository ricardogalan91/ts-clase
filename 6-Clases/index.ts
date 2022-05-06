interface Artist{
    name:string;
    age:number;
    style:string;
    location:string;
}

class StreetArtist{
    artista:Artist;
    famous:boolean;
    constructor(artista:Artist, famous:boolean){
        this.artista=artista;
        this.famous=famous;
    }
}

let artistaCallejero:StreetArtist= new StreetArtist({name:'Ricardo', age:30, style:'Comic', location:'Buenos Aires'}, true);

console.log(artistaCallejero);

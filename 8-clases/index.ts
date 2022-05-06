interface Perros{
    cola:boolean;
    quieroComer():void;
    raza:string;
}

class Mascota implements Perros{
    nombre:string;
    edad:number;
    animal:string;
    siQuierePasear:boolean;
    cola: boolean;
    raza:string;

    constructor(nombre:string, edad:number, animal:string, siQuierePasear:boolean, cola:boolean, raza:string){
        this.nombre=nombre;
        this.edad=edad;
        this.animal=animal;
        this.siQuierePasear=siQuierePasear;
        this.cola=cola;
        this.raza=raza;
    }

    quierePasear(nombre:string){
        if(this.siQuierePasear){
            console.log('Woof woof, soy '+nombre +' y quiero pasear');
        }
    }

    quieroComer(): void {
        console.log('Tengo hambre, dame comida');
    }
}

let maxi=new Mascota('Maxi', 2, 'Perro', true, true, 'Caniche');

console.log(maxi);
maxi.quierePasear('Maxi');
maxi.quieroComer();
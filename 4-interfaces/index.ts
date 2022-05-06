interface Estudiante{
    nombre:string;
    edad:number;
    cursos:string[];
    presente?:boolean;
}

let estudiante:Object={
    nombre:'Ricardo',
    edad:30,
    cursos: ['Angular'],
    presente:true
}
const {
    edad,
    nombre,
    nuevaString,
    nuevoNum,
    nuevoBool,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,

// Ejemplos
}= require ("./index.js");

describe('edad',function(){
    it ("Debe ser un número", function(){
        expect(typeof edad).toBe('number')
    }
    );
})

describe('nombre',function(){
    it ("Debe ser un string", function(){
        expect(typeof nombre).toBe('string')
    }
    );
})

// Ejercicio 01
describe('nuevaString',function(){
    it ("Debe ser un string", function(){
        expect(typeof nuevaString).toBe('string')
    }
    );
})

// Ejercicio 02 
describe('nuevoNum',function(){
    it ("Debe ser un numero", function(){
        expect(typeof nuevoNum).toBe('number')
    }
    );
})

//Ejercicio 03
describe('nuevoBool',function(){
    it ("Debe ser un numero", function(){
        expect(typeof nuevoBool).toBe('boolean')
    }
    );
})

//Ejercicio 04
describe('nuevaResta',function(){
    it ("Debe Restarse " , function(){
        expect(typeof nuevaResta).toBe('boolean')
    }
    );
})

//Ejercicio 05
describe('nuevaMultiplicacion',function(){
    it ("Debe Multiplicarse " , function(){
        expect(typeof nuevaMultiplicacion).toBe('boolean')
    }
    );
})

//Ejercicio 06
describe('nuevoModulo',function(){
    it ("Sacar el modulo " , function(){
        expect(typeof nuevoModulo).toBe('boolean')
    }
    );
})





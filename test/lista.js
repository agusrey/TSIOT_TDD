/**
En una lista vacía hay cero elementos. - OK
Cuando se agrega un elemento a una lista vacía hay un elemento.
Cuando se agregan dos elementos a una lista vacía hay dos elementos.
En una lista vacía no se encuentra ninguna clave.
Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
Cuando se agrega un elemento al principio la lista de claves esta ordenada.
Cuando se agrega un elemento al final la lista de claves esta ordenada.
*/

const { assert } = require('chai');

const expect = require('chai').expect;

const Lista = require('../src/lista.js');

describe("lista de pares clave:valor", function(){
    var lista = new Lista();
    it("En una lista vacía hay cero elementos almacenados", function(){
        
        assert.equal(lista.count(), 0);
    });

    it("En una lista vacía no se encuentra ninguna clave", function(){
        
        assert.isNull(lista.find("clave"));

    });
});

describe("Cuando se agrega un elemento a una lista vacía hay un elemento", function(){
    var lista = new Lista();
    lista.add("clave", "valor");

    it("Hay un elemento almacenado", function(){
        assert.equal(lista.count(), 1);
    });

    it("Se recupera el valor de la clave del elemento agregado", function(){
        assert.equal(lista.find("clave"), "valor");
    });
});

describe("Cuando se agrega un nuevo elemento con una clave que ya está en la lista", function(){
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave", 123);

    it("Solo hay un elemento almacenado", function(){
        assert.equal(lista.count(), 1);
    });

    it("Se verifica que el elemento posee el valor actualizado", function(){
        assert.equal(lista.find("clave"), 123);
    });
    
});



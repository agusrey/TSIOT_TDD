/**
En una lista vacía hay cero elementos.
Cuando se agrega un elemento a una lista vacía hay un elemento.
En una lista vacía no se encuentra ninguna clave.
Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
Cuando se agrega un elemento al principio la lista de claves esta ordenada.
Cuando se agrega un elemento al final la lista de claves esta ordenada.
*/

const { assert } = require('chai');

const expect = require('chai').expect;

const Lista = require('../src/lista.js');

describe("lista de pares clave:valor", function(){
    it("En una lista vacía hay cero elementos almacenados", function(){
        var lista = new Lista();
        assert.equal(lista.count(), 0);
        //expect(lista.size()).to.equal(0);
    });
});
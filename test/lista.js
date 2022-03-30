/**
En una lista vacía hay cero elementos. - OK
Cuando se agrega un elemento a una lista vacía hay un elemento. - OK
Cuando se agregan dos elementos a una lista vacía hay dos elementos. - OK
En una lista vacía no se encuentra ninguna clave. - OK
Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.  - OK
Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.  - OK
Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.  - OK
Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
Cuando se agrega un elemento al principio la lista de claves esta ordenada.
Cuando se agrega un elemento al final la lista de claves esta ordenada.
Si se agrega un elemento a una lista vacía se puede borrar la pareja correspondiente. - OK
No se puede agregar una clave si no es cadena de texto.
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

    it("Si la clave no es texto no se puede agregar el elemento a la lista", function(){
        var lista = new Lista();
        lista.add(1, "valor");
        assert.equal(lista.count(), 0);
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

describe("Cuando se agregan varios elementos a una lista", function(){
    var lista = new Lista();
    lista.add("cadena", "valor");
    lista.add("numero", 123);

    it("Hay dos elementos almacenados", function(){
        assert.equal(lista.count(), 2);
    });

    it("se recupera el valor de los elementos almacenados", function(){
        assert.equal(lista.find("cadena"), "valor");
        assert.equal(lista.find("numero"), 123);
    });

});

describe("Cuando se borra una pareja de la lista", function(){
    it("el elemento desaparece de la lista", function(){
        var lista = new Lista();
        lista.add("cadena", "valor");
        lista.add("numero", 123);
        lista.remove("cadena");
        assert.equal(lista.find("cadena"), null);
    });


});

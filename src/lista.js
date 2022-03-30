/**
REQUISITOS

• Almacena pares clave:valor.
• Las claves deben ser únicas.
• Las claves son cadenas de texto.
• Se debe poder recuperar un valor a partir de una clave.
• Se debe poder actualizar el valor asociado a una clave.
• Se debe poder recuperar la cantidad de elementos almacenados en la lista.
• Se debe poder recuperar una lista ordenada con las claves almacenadas en la lista.
• Se puede borrar una pareja a partir de la clave.
 */


module.exports = class Lista{
    
    #elements;

    #get_index(key) {
        for (let index = 0; index < this.#elements.length; index++) {
            if (this.#elements[index].key == key) {
                return index;
            };
        }
        return NaN;
    }

    constructor() {
        this.#elements = [];
    };
 
    count(){
        return this.#elements.length;
    };

    find(key){
        var index = this.#get_index(key);
        if(!isNaN(index)){
            return this.#elements[index].value;
        }
        return null;
    };

    add(key, value){
        var index = this.#get_index(key);
        if (!isNaN(index)){
            this.#elements[index].value = value;
        } else {
            this.#elements.push({"key": key, "value": value});
        }
    };

    remove(key){
        var index = this.#get_index(key);
        if (!isNaN(index)){
            this.#elements.splice(index, 1);
        }
    }
}
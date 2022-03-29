module.exports = class Lista{
    
    #elementos;

    constructor(){
        this.#elementos = [];
    }
    count(){
        return this.#elementos.length;
    }

    find(value){
        if(this.#elementos.length == 1){
            return this.#elementos[0].value;
        }
        return null;
    }

    add(key, value){
        this.#elementos.push({'key':key, 'value':value});
    };
}
module.exports = class Lista{
    
    #elements;

    constructor(){
        this.#elements = [];
    }
    count(){
        return this.#elements.length;
    }

    find(value){
        if(this.#elements.length == 1){
            return this.#elements[0].value;
        }
        return null;
    }

    add(key, value){
        for(let i = 0; i < this.#elements.length; i++){

            if(this.#elements[i].key == key){
                this.#elements[i].value = value;
                return;
            };
        }
        this.#elements.push({'key':key, 'value':value});
    }
}

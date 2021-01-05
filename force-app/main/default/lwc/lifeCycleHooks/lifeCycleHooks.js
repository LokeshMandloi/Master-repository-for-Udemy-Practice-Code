import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

    name = 'Lokesh';

    constructor(){
        super();
        console.log('inside constructor');
        this.name = this.name+'Singh';
    }
    
    renderedCallback(){
        console.log('renderedCallback');
    }

    connectedCallback(){
        console.log('connectedCallback');
    }

    disconnectedCallback(){
        console.log('disconnectedCallback');
    }

    

    // render(){

    // // }
     
    errorCallback(error, stack){
        console.error(error);

    }

}
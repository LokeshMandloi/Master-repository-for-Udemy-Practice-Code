import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

    name = 'Lokesh';

    constructor(){
        super();
        console.log('inside constructor');
        this.name = this.name+'Singh';
    }

    connectedCallback(){
        console.log('connectedCallback');
    }

    disconnectedCallback(){
        console.log('disconnectedCallback');
    }

    renderedCallback(){
        console.log('renderedCallback');
    }

    // render(){

    // // }
     
    errorCallback(error, stack){
        console.error(error);

    }

}
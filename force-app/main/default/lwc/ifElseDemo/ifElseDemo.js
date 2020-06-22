import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {

    isTom =  false ;
    isJerry = true;

    showTom(){
        this.showTom=true;
        this.showJerry=false;
    }

    showJerry(){
        this.showTom=false;
        this.showJerry=true;
    }
   
}
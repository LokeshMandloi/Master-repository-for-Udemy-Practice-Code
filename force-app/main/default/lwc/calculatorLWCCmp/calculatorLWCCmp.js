import { LightningElement } from 'lwc';

export default class CalculatorLWCCmp extends LightningElement {
    
    number1;
    number2;

    handleChangeEvent(event){
        const val = event.target.value;
        const lab = event.target.label;
        if(lab === 'Number 1'){
            this.number1 = val;
        }else{
            this.number2 = val;
        }

    }

    doSum(){
     
        const sum = parseInt(this.number1) + parseInt(this.number2);
        
    }

    doSubs(){
     
        const subs = parseInt(this.number1) - parseInt(this.number2);
        
    }

    doDiv(){
     
        const div = parseInt(this.number1) / parseInt(this.number2);
    }

    doMulti(){
     
        const multi = parseInt(this.number1) * parseInt(this.number2);
    }

}
import { LightningElement } from 'lwc';

export default class ShowhideTextbox extends LightningElement {
    firstName = '';
    lastName = '';

    handleChange(event){
        this.firstName = event.target.firstName;
        this.lastName =  event.target.lastName;

    }

    handleClick(){
        
    }
}
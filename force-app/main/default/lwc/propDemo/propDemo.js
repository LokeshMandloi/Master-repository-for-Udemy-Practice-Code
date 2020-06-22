import { LightningElement, track, api } from 'lwc';

export default class PropDemo extends LightningElement {
    //  message = 'Non-reactive Property';
    @track message = 'reactive Property';
    @api message1 = 'Reactive property using @api decorators';

    get name(){
        return 'Lokesh';
    }

    get changedMessage(){
        return this.message1+'Added Value using get prop!';
    }

     handleChange(event){
        this.message1 = event.target.value;
        console.log(this.message);
        console.log(this.message1);
    }
}
import { LightningElement } from 'lwc';

export default class HtmlEventBasic2 extends LightningElement {
    message = 'Welcome Lokesh';
    handleChange(event){
        //alert('I am inside method of js');
        const val =  event.target.value;
        const lbl =  event.target.label;

        console.log('The value is'+val+'the label is'+lbl);

    }
}
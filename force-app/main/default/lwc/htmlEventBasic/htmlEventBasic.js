/* eslint-disable no-unused-vars */
import { LightningElement } from 'lwc';

export default class HtmlEventBasic extends LightningElement {
    message = 'Welcome Lokesh';
    handleChange(event){
        const val = event.target.value;
        const lbl = event.target.label;
        // eslint-disable-next-line no-console
        console.log('val===='+val+'label is=====>',lbl);
        // eslint-disable-next-line no-alert====>
        //alert('I am inside method');
    }

}
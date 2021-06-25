import { LightningElement, api } from 'lwc';
   
export default class MyLightningWebComponent extends LightningElement {
 @api buttonText;
 
 handleClick() {
   console.log("Button Clicked!");
 }
}
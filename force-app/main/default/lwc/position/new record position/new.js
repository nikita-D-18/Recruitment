
/*import ACCOUNT_OBJECT from '@salesforce/schema/Position__c';
import NAME_FIELD from '@salesforce/schema/Position__c.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

/**
 * Creates Account records.
 */
/*
export default class AccountCreator extends LightningElement {

    accountObject = Position__c;
    myFields = [Name, WEBSITE_FIELD];

    handleAccountCreated(){
        // Run code when account is created.
    }
}
*/
import { LightningElement } from 'lwc';
export default class createRecordForm extends LightningElement {
   accountId;
   handleSuccess(event)
   {
       

   }
}

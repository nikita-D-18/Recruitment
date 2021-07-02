import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationExampleLWC extends NavigationMixin(LightningElement) {
    @api recordId;
    // Navigate to New Account Page
    navigateToNewHomePage()
    {
       this[NavigationMixin.Navigate]({
           type: 'standard__objectPage',
           attributes: {
               objectApiName: 'Home__c',
               actionName: 'edit'
           },
       });
   }
    navigateToNewAccountPage()
     {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Position__c',
                actionName: 'list'
            },
        });
    }
    // Navigate to View Account Page
    navigateToViewAccountPage() {

          this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Position__c',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    
    navigateToViewCandidatePage() {

        this[NavigationMixin.Navigate]({
          type: 'standard__objectPage',
          attributes: {
              objectApiName: 'Candidate__c',
              actionName: 'list'
          },
          state: {
              filterName: 'Recent'
          },
      });
  }
  navigateToViewJobPage() {

    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
          objectApiName: 'Job_Application__c',
          actionName: 'list'
      },
      state: {
          filterName: 'Recent'
      },
  });
}
    // Navigate to Edit Account Page
    navigateToEditAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Position__c',
                actionName: 'edit'
            },
        });
    }
    // Navigation to Account List view(recent)
    navigateToAccountListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Position__c',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    // Navigation to Contact related list of account
    navigateToContactRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Position__c',
                relationshipApiName: 'Candidate__c',
                actionName: 'view'
            },
        });
    }
    //Navigate to home page
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }
    // Navigation to contant object home page
    navigateToContactHome() {
        this[NavigationMixin.Navigate]({
            "type": "standard__objectPage",
            "attributes": {
                "objectApiName": "Candidate__c",
                "actionName": "home"
            }
        });
    }
    //Navigate to chatter
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }
    //Navigate to Reports
    navigateToReports() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }
    //Navigate to Files home
    navigateToFilesHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            },
        });
    }
    // Navigation to lightning component
    navigateToLightningComponent() {
        this[NavigationMixin.Navigate]({
            "type": "standard__component",
            "attributes": {
                //Here customLabelExampleAura is name of lightning aura component
                //This aura component should implement lightning:isUrlAddressable
                "componentName": "c__customLabelExampleAura"
            }
        });
    }
    // Navigation to web page 
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.sfdcpoint.com/"
            }
        });
    }
    //Navigate to visualforce page
    navigateToVFPage() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__webPage',
            attributes: {
                url: '/apex/AccountVFExample?id=' + this.recordId
            }
        }).then(generatedUrl => {
            window.open(generatedUrl);
        });
    }
    // Navigation to Custom Tab
    navigateToTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'CustomTabName'
            },
        });
    }
    navigateToViewcontactPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: this.contact,
            },
        });
    }
      
}
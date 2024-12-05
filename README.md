# library

## New Lessons

### Dialogs

The dialog is a newer HTML tag that I wasnt familiar with. The project outline suggests its use when implementing an add button, so I thought this would be a good time to learn how to use it.

Here's things I thought would be important to remember about them:

- Dialogs can be modal or non-modal. To open a non-modal, it's suggested to use the **.show()** method on the dialog, and **.showModal()** to open a modal.

- The main difference between a modal and non-modal is that with a non-modal, interaction with the rest of the page is still allowed, while with a modal interaction is restricted to the modal.

- Dialogs can be closed by using the **.close()** method on the dialog, or if you are using a form, the form should have the **method** attribute set to **dialog**, or you can assign the button that submits the form an attribute **formmethod** set to **dialog**. Both options cause the dialog to close.

- Dialogs that have forms with required entries can be closed anyway by adding the **formnovalidate** to a button within the form, or calling the **.close()** method on the dialog. The approach I initially took for this project was to have the cancel button have the formnovalidate attribute in case the user didn't want to enter a book, and the submit button enforce the required entries. This caused some errors where the dialog wouldn't close upon clicking the cancel button. My guess was that my JS code was interfering with it, because it works as explained without code, so I switched to not requiring any of the inputs in my HTML, but validating through my JS to prevent submissions with empty fields.

- I also initially had event listeners for the cancel and submit buttons in my dialog since they have different behaviors. I found this article about [HTML Dialogs](https://mayashavin.com/articles/build-a-dialog-with-dialog-element) that explains that by having the forms method attribute set to dialog, any button that is clicked within the form will kick off the close event for the dialog. I used this tip to take the logic from the submit and cancel button's event listeners and put them in the dialogs close event listener and perform the correct action by checking the dialogs return value, eliminating the need for event listeners for buttons within the dialog. I did have to call showModal in case submission validation failed though, as it would close regardless if the form was valid or not without it.

- The **returnValue** of a dialog element is, by default, the empty string or the value of the button that submitted the form, if there is one. So, you should change the **value** attribute of the submit button to whatever it is you want the form to send. Once the dialog's close event is triggered, it's **returnValue** will take on the value of the submit button.

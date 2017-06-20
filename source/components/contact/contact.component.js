/**
 * Created by Misha on 20.06.2017.
 */
import template from './contact.component.html'
import './contact.component.scss'

class Controller {
    constructor(){
        console.log("contact init");
    }
}

const contactComponent = {
    template,
    controller: Controller
};



export {contactComponent};
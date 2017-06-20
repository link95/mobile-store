/**
 * Created by Misha on 17.06.2017.
 */
import template from './menu.component.html'
import './menu.component.scss'

class Controller {
    constructor(){
        console.log("menu init");
    }
}

const menuComponent = {
    template,
    controller: Controller
};



export {menuComponent};
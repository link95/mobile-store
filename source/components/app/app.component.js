/**
 * Created by Misha on 20.06.2017.
 */
import template from './app.component.html'
import './app.component.scss'

class Controller {
    constructor(){
        console.log("app init");
    }
}

const appComponent = {
    template,
    controller: Controller
};



export {appComponent};
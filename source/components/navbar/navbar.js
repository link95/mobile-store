/**
 * Created by Misha on 20.06.2017.
 */
import './navbar.scss'
import template from './navbar.html'

class Controller {
    constructor(){
        console.log("hello navbar");

        this.datas = [
            {
            name: "Menu",
                fullname: ""
        },{
                name: "Contact",
                fullname: ""
            }
        ]
    }
}



const navComponent = {
    template,
    controller: Controller
};

export {navComponent};
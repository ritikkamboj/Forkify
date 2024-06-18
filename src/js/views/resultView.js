import view from "./view";
import previewView from "./previewView.js";

import icons from "url:../../img/icons.svg";

 class resultView extends view{
    _parentElement = document.querySelector('.results');
    _errMessege =`No recipe found for your query, please try again !`;
    _messege=``;


    _generateMarkup()
    {
        console.log(this._data);

        return this._data.map(result => previewView.render(result, false)).join('') ;


    }


}
export default new resultView();

import view from "./view";
import previewView from "./previewView.js";

import icons from "url:../../img/icons.svg";

 class bookmarksView extends view{
    _parentElement = document.querySelector('.bookmarks__list');
    _errMessege =`No Bookmark yet.Find a nice recipe and bookmark it `;
    _messege=``;


    _generateMarkup()
    {
        console.log(this._data);

        return this._data.map(bookmark => previewView.render(bookmark, false)).join('') ;


    }

    

}
export default new bookmarksView();

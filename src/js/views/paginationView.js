import view from "./view";
import { API_URL,RES_PER_PAGE } from "../config.js";


import icons from "url:../../img/icons.svg";


class paginationView extends view{

    _parentElement = document.querySelector('.pagination');

    _generateMarkup()
    {
        // console.log('jai baabe ki ')
        // console.log(this._data.result.length);
        // console.log(this._data.resultPerPage);
        const numPages = Math.ceil(this._data.result.length/this._data.resultPerPage);
        console.log(numPages);

        // for Ist page
        if(this._data.page===1 && numPages >1)
            return `pehle number page par hai`
        // for last page 
        if(this._data.page=== numPages)
            return `last page par hai `
        if( this._data.page < numPages)
            return `On any page between first and last `
    }
}

export default new paginationView();
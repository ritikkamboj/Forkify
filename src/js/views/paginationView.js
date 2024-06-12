import view from "./view";
import { API_URL,RES_PER_PAGE } from "../config.js";


import icons from "url:../../img/icons.svg";


class paginationView extends view{



    _parentElement = document.querySelector('.pagination');

    addHandlerClick = function(handler)
    {
        console.log("jai shree ram ")
        this._parentElement.addEventListener('click', function(e)
    {
        const btn =(e.target.closest('.btn--inline'));
        if(!btn)
            return
        // this makes the resulted target element steady , otherwise its changing depending upon where we clciking 
        // console.log(btn)
        // console.log(btn.dataset);
        // console.log(btn.dataset.goto);

        const goToPage = +btn.dataset.goto;
        console.log(goToPage);
        handler(goToPage);

    })

      
    }

    _generateMarkup()
    {
        const curpage = this._data.page;

        // console.log('jai baabe ki ')
        // console.log(this._data.result.length);
        // console.log(this._data.resultPerPage);
        const numPages = Math.ceil(this._data.result.length/this._data.resultPerPage);
        console.log(numPages);

        // for Ist page
        if(curpage===1 && numPages >1)
            return `<button data-goto="${curpage+1}" class="btn--inline pagination__btn--next">
            <span>Page ${curpage+1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
        // for last page 
        if(curpage=== numPages && numPages > 1)
            return `<button data-goto="${curpage-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curpage -1}</span>
          </button> `;
        if( curpage < numPages)
            return `<button data-goto="${curpage-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curpage -1}</span>
          </button> 

        <button data-goto="${curpage+1}" class="btn--inline pagination__btn--next">
        <span>Page ${curpage+1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`
      ;

        return ``;
    }
}

export default new paginationView();



import icons from "url:../../img/icons.svg";



export default class view 
{
    _data;
    render(data) {
        if(!data || (Array.isArray(data) && data.length === 0) )
            return this.renderError()
        this._data = data;
        const markup = this._generateMarkup();
        // recipeContainer.innerHTML = '';
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
  renderSpinner = function () {
         const html = `<div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
        // this._parentElement.innerHTML='';
        this._clear();
        
        this._parentElement.insertAdjacentHTML('afterbegin', html);
      }

    _clear()
    {
        // console.log('idhar');

        this._parentElement.innerHTML='';
    }

    renderError(message=this._errMessege)
    {
      const html =`<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
          this._clear();
        
          this._parentElement.insertAdjacentHTML('afterbegin', html);


    }

    renderMessege(message=this._messege)
    {
      const html =`<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
          this._clear();
        
          this._parentElement.insertAdjacentHTML('afterbegin', html);


    }
    


}
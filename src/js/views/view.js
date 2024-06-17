


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

    update(data)
    {
      // if(!data || (Array.isArray(data) && data.length === 0) )
      //   return this.renderError();

      this._data = data;
      const newMarkup = this._generateMarkup();

      const newDOM= document.createRange().createContextualFragment(newMarkup);

      const newElements = Array.from(newDOM.querySelectorAll('*'));
      const curElements = Array.from(this._parentElement.querySelectorAll('*'));

      console.log(newElements);
      console.log(curElements);
      console.log("jai");

      newElements.forEach((newEl,i)=>{
        const curEl = curElements[i];

        // console.log(curEl ,newEl.isEqualNode(curEl));

        //update changed Text 
        if(!(newEl.isEqualNode(curEl)) && newEl.firstChild?.nodeValue.trim() !== '')
          {
            curEl.textContent = newEl.textContent;
            // console.log('❤',newEl.firstChild.nodeValue.trim()); // this will give on console, that value of the parent's child element whose value got changes 
          }

          // update changes Attributes 
          if(!(newEl.isEqualNode(curEl)))
            {
              // console.log(Array.from(newEl.attributes));
              Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name ,attr.value));
              
            }
   })
      // console.log("jai");
      
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


  
};


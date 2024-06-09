class searchView
{
    _parentE1 = document.querySelector('.search');

    getQuery()
    {
        // console.log('baba');
        // console.log(this.#parentE1.querySelector('.search__field'));
       
        const query =(this._parentE1.querySelector('.search__field').value);
        this._clear();
        return query;
    }

    addHandleSearch(handler)
    {
        this._parentE1.addEventListener('submit', function(e){
            e.preventDefault();
            handler();

        })
    }
    _clear()
    {
        this._parentE1.querySelector('.search__field').value='';
    }

}

export default new searchView()
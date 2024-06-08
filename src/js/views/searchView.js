class searchView
{
    #parentE1 = document.querySelector('.search');

    getQuery()
    {
        // console.log('baba');
        // console.log(this.#parentE1.querySelector('.search__field'));
       
        const query =(this.#parentE1.querySelector('.search__field').value);
        this.#clear();
        return query;
    }

    addHandleSearch(handler)
    {
        this.#parentE1.addEventListener('submit', function(e){
            e.preventDefault();
            handler();

        })
    }
    #clear()
    {
        this.#parentE1.querySelector('.search__field').value='';
    }

}

export default new searchView()
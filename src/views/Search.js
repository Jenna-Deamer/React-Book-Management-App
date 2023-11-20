function Search () {
    return(
        <main className="container">
            <h1 className="pt-4">Search by Title</h1>
            <form>
                <fieldset>
                <label htmlFor="title">Title</label>
                <input id="title" type="text"></input>
                </fieldset>
                <button className="btn btn-primary">Search</button>
            </form>
        </main>
    )
}

export default Search;
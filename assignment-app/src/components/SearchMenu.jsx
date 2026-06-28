import { useState } from "react";
import { useSearch } from '../hooks/useSearch'
import { FILTER_TYPE_OPTIONS } from "../utils/constants";


function SearchMenu(){
    const { filterType, setFilterType, keyword, setKeyword, results, status, errorMsg, runSearch, } = useSearch();

    const[localFilterType, setLocalFilterType] = useState(filterType);
    const[localKeyword, setLocalKeyword] = useState(keyword);

    function handleSubmit(event){
        event.preventDefault();

        setFilterType(localFilterType);
        setKeyword(localKeyword);

        runSearch({
            filterType: localFilterType,
            keyword: localKeyword,
        });
    }
    return (
        <section className="container py-4 text-start">  
            <form className="row g-3 align-items-end" onSubmit={handleSubmit}>

                <div className="col-md-3">
                    <label className="form-label" htmlFor="filterType">Filter Type</label>
                    <select id="filterType" value={localFilterType} className="form-select" onChange={(event) => setLocalFilterType(event.target.value)}>
                        {FILTER_TYPE_OPTIONS.map((option) => (<option value ={option.value} key={option.value || 'all'}>
                                {option.label}
                            </option>) )}
                    </select>
                </div>

                <div className="col-md-6">                    
                    <label className="form-label" htmlFor="keyword">
                        Keyword
                    </label>
                    <input id="keyword" className="form-control" type="search" value={localKeyword} onChange={(event) => setLocalKeyword(event.target.value)} placeholder="Enter search keyword" />
                </div>

                <div>
                    <button className="btn btn-primary w-100" type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Searching...' : 'Search'}
                    </button>                
                </div>

            </form>

            <div className="mt-3">
                {status === 'loading' && (<p className="text-muted mb-0">Loading...</p>)}
                {status === 'error' && (<p className="text-danger mb-0">Error: {errorMsg}</p>)}

                {status === 'success' && results.length === 0 && (
                    <p className="text-muted mb-0">No Records To Show...</p>
                )}
                {status === 'success' && results.length > 0 && (
                    <p className="text-muted mb-0">Displaying {results.length.toLocaleString('en-US')} Records</p>
                )}
            </div>
        </section>
    );
};

export default SearchMenu;
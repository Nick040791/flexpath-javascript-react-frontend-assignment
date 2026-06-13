import { useState } from "react";
import { useSearch } from '../hooks/useSearch'
import { FILTER_TYPE_OPTIONS } from "../utils/constants";

function SearchMenu(){
    const { filterType, setFilterType, keyword, setKeyword, results, status, errorMsg, runSearch, } = useSearch();

    const[localFilterType, setLocalFilterType] = useState(keyword);
    const[localKeyword, setLocalKeyword] = useSearch(keyword);

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
            <form className="row g-3 align-items-end" on onSubmit={handleSubmit}>
                <div className="col-md-3">

                </div>
            </form>
        </section>
    )
}
    
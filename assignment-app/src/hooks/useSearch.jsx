import { useContext } from "react";
import { SearchContext } from '../context/SearchContext';

export function useSearch(){
    const context = useContext(SearchContext);
    if (!context){
        throw new Error('useSerach must be used inside of searchProvider')
    }
    return context;
};

import { createContext, useCallback, useEffect, useMemo, useState, } from "react";
import { VALID_FILTER_TYPES } from "../utils/constants";

const SearchContext = createContext(null);

function getSafeFilterType(value){
    if (VALID_FILTER_TYPES.has(value)) {
        return value;
    }
    return '';
};

function getInitialResults(){
    const savedResults = localStorage.getItem('searchResults');
    if (!savedResults){return [];}
};
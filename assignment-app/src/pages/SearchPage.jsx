import MetricCards from '../components/MetricCards';
import SearchMenu from '../components/SearchMenu';
import SearchResultsTable from '../components/SearchResultsTable';

const SearchPage = () => { return (
    <>
        <SearchMenu />
        <MetricCards />
        <SearchResultsTable />
    </>
);
};

export default SearchPage;
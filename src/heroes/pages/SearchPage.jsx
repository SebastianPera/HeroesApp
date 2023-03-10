import { HeroeCard } from "./../components/HeroeCard";
import { useForm } from "./../../hooks/useForm";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import queryString from "query-string";
import { getHerosByName } from "./../helpers/getHerosByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const heroes = getHerosByName(query || undefined);

  const { searchText, onInputChange } = useForm({
    searchText: query,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText || ""}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {((query === "") || (query === null)) ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hero with <b>{searchParams?.get("q")}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

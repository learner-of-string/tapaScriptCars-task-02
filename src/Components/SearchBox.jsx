import PropTypes from "prop-types";

function SearchBox({ searchKeyword, onSearchCar }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search Cars..."
        className="border p-1 w-60  rounded-md"
        value={searchKeyword}
        onChange={(e) => onSearchCar(e.target.value)}
      />
    </form>
  );
}

SearchBox.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
};

export default SearchBox;

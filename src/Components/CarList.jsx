import CarBox from "./CarList/CarBox";
import PropTypes from "prop-types";

function CarList({ cars, searchKeyword }) {
  const searchedCars = [];

  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) === -1) {
      return;
    } else {
      searchedCars.push(<CarBox key={car.id} car={car}></CarBox>);
    }
  });

  //console.log("Searched Cars", searchedCars);

  return <div className="space-y-4 flex flex-wrap gap-10">{searchedCars}</div>;
}

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  searchKeyword: PropTypes.string.isRequired,
};

export default CarList;

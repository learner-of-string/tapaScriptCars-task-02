import CarBox from "./CarList/CarBox";
import PropTypes from "prop-types";

function CarList({ cars }) {
  return (
    <ul className="flex gap-10 max-w-full flex-wrap">
      {cars.map((car) => (
        <li key={car.id} className="w-96 rounded-md shadow-2xl p-5">
          <CarBox car={car}></CarBox>
        </li>
      ))}
    </ul>
  );
}

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;

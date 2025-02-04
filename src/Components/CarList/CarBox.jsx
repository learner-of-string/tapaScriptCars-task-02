import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

function CarBox({ car }) {
  return (
    <>
      <CarDetails
        title={car.title}
        brand={car.brand}
        year={car.year}
        price={car.price}
        isPremium={car.isPremium}
      ></CarDetails>
    </>
  );
}

CarBox.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }),
};

export default CarBox;

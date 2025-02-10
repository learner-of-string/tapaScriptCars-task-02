import PropTypes from "prop-types";

function CarDetails(p) {
  const title = p.title;
  const brand = p.brand;
  const year = p.year;
  const price = p.price;
  const isPremium = p.isPremium;

  return (
    <>
      <h2 className="mb-2">{title}</h2>

      <p>Brand: {brand}</p>
      <p>Year: {year}</p>
      <p>Price: ${price}</p>
      <p>Premium: {isPremium ? "Yes" : "No"}</p>
    </>
  );
}

CarDetails.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

export default CarDetails;

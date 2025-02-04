import PropTypes from "prop-types";

function CarDetails(props) {
  const title = props.title;
  const brand = props.brand;
  const year = props.year;
  const price = props.price;
  const isPremium = props.isPremium;

  return (
    <>
      <h2 className="mb-2">{title}</h2>

      <p>
        Brand: <span>{brand}</span>
      </p>
      <p>
        Year: <span>{year}</span>
      </p>
      <p>
        Price: <span>${price}</span>
      </p>
      <p>
        Premium: <span>{isPremium ? "Yes" : "No"}</span>
      </p>
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

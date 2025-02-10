import PropTypes from "prop-types";

function IsPremiumFilter({ isPremiumOnly, onTogglePremium }) {
  return (
    <div className="space-x-1.5">
      <input
        type="checkbox"
        name="IsPremiumFilter"
        id="IsPremiumFilter"
        checked={isPremiumOnly}
        onChange={(e) => onTogglePremium(e.target.checked)}
      />
      <label htmlFor="IsPremiumFilter">Show Premium Only</label>
    </div>
  );
}

IsPremiumFilter.propTypes = {
  isPremiumOnly: PropTypes.bool.isRequired,
  onTogglePremium: PropTypes.func.isRequired,
};

export default IsPremiumFilter;

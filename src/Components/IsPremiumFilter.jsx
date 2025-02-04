function IsPremiumFilter() {
  return (
    <div className="space-x-1.5">
      <input
        type="checkbox"
        name="IsPremiumFilter"
        id="IsPremiumFilter"
        value={IsPremiumFilter}
      />
      <label htmlFor="IsPremiumFilter">Show Premium Only</label>
    </div>
  );
}

export default IsPremiumFilter;

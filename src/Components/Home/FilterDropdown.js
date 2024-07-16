const FilterDropdown = ({
  filter,
  setFilter,
  filterName,
  options,
  onFilter,
}) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {filterName}
      </button>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li key={option}>
            {option}
            <input
              key={option}
              type="checkbox"
              onChange={() => onFilter(filter, setFilter, option)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropdown;

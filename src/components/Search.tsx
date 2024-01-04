// Search.tsx

import React, { ChangeEvent, CSSProperties } from 'react';
import SearchIcon from '../assets/SearchIcon.svg';

interface SearchProps {
  placeholder?: string;
  containerStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = 'Search',
  containerStyle = {},
  inputStyle = {},
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center py-1" style={containerStyle}>
      <img src={SearchIcon} alt="Search_Icon" className="m-3 ml-4 h-6 w-6" />
      <input
        type="text"
        placeholder={placeholder}
        style={{ ...inputStyle }}
        className=" bg-transparent focus:outline-none"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import NewsContext from '../contextApi/NewsConext';
import { Link } from 'react-router-dom';


function Header() {
  const { setCategories } = useContext(NewsContext);
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setCategories(category);
    
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <h1>News Portal</h1>

      {/* Hamburger menu icon */}
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Categories menu */}
      <div className={`categories ${menuOpen ? 'open' : ''}`}>
        <ul>
          <Link to="/" onClick={() => handleCategoryClick('general')}>
            <li>Home</li>
          </Link>
          <Link to="/" onClick={() => handleCategoryClick('business')}>
            <li>Business</li>
          </Link>
          <Link to="/" onClick={() => handleCategoryClick('politics')}>
            <li>Politics</li>
          </Link>
          <Link to="/" onClick={() => handleCategoryClick('sport')}>
            <li>Sport</li>
          </Link>
          </ul>
      </div>

      {/* Search input */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/">
          <FaSearch
            className="fasearch"
            onClick={() => {
              if (search !== '') {
                setCategories(search);
              }
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;

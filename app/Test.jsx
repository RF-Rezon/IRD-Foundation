"use client"

// pages/index.js
import { useEffect, useState } from 'react';

export default function Test() {
  const [data, setData] = useState({ categories: [], subcategories: [], duas: [] });

  const fetchData = async () => {
    try {
      const response = await fetch('./api/getData');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }   
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data</h1>

      <div>
        <h2>Categories</h2>
        <ul>
          {data.categories.map((category) => (
            <li key={category.cat_id}>{category.cat_name_bn}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Sub-Categories</h2>
        <ul>
          {data.subcategories.map((subcategory) => (
            <li key={subcategory.subcat_id}>{subcategory.subcat_name_bn}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Duas</h2>
        <ul>
          {data.duas.map((dua) => (
            <li key={dua.dua_id}>{dua.dua_name_bn}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

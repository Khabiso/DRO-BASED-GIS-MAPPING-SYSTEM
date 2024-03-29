import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, GeoApiOptions } from '../../api';
import Layout from '../Layout/Layout'; // Import Layout component


const Search = ({ OnSearchChange }) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100&namePrefix=${inputValue}`,
      GeoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    OnSearchChange(searchData);
  }

  return (
  <Layout>
  
  <AsyncPaginate
    placeholder="khetha Teropo kahare ho naha ea heno"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
  />

</Layout>
  )
}

export default Search;

/*
  const loadOptions = (inputvalue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputvalue}`, GeoApiOptions)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            return {
                options: data.data.map(city => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`
                }))
            };
        })
        .catch(error => {
            console.error(error);
            return { options: [] }; // Return empty options array in case of error
        });
}


/*  const loadOptions = (inputvalue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputvalue}`, GeoApiOptions)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        return {
          options: data.data.map(city => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`                       1.
          }))
        };
      })
      .catch(error => {
        console.error(error);
      });
  }

*/
  /*const loadOptions = (inputvalue) => {
      return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=&{inputvalue}`,  GeoApiOptions)
        .then(response => response.text())
        .then(result => {
          return{
            options: response.data.map((city)) => {                         2.

              return{

                value: `${city.latitude} ${city.longitude}`,
                label:  `${city.name} ${city.countryCode}`
                
              }
            }
          }
        })
        .catch(error => {
          console.error(error);
        });

  }*/

  
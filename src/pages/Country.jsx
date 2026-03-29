import React, { use, useEffect, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/Layouts/UI/Loader';
import {CountryCard} from './CountryCard';
import { useState } from 'react';

const Country = () => {
  

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async() => {
    const res =await getCountryData();
    setCountry(res.data)
    });
  },[]);

  if (isPending)  return <Loader />;

return (
<section className='country-section'>
  <ul className='grid grid-four-cols'>
    {country.map((curCountry, index) => {
      return <CountryCard country = {curCountry} key = {index}/>  
    })}

  </ul>
</section>
)
   
  
}

export default Country;
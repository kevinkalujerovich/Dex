import React, { useState, useEffect } from 'react';
import data from '../data.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();
 
  useEffect(() => {
    const getItems = new Promise(resolve => {
      setLoader(true);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    catId
      ? getItems.then(res => {
          setItems(res.filter(i => i.category === catId));
          setLoader(false);
        })
      : getItems.then(res => {
          setItems(res);
          
          setLoader(false);
        });
  }, [catId]);

  

  return (
    <ItemList array={items} load={loader}/>
  )
  };
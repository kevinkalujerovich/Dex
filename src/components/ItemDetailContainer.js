import  { useState ,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {Container,Grid,CircularProgress} from '@material-ui/core';
import data from '../data.json';
import { useParams } from "react-router-dom";



 export default function ItemDetailContainer(){
 
const [array, setArray] = useState([]);
const { catId } = useParams();

useEffect(() => {
  const getItems = new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  catId?getItems.then(res => {
          setArray(res.filter(i => i.category === catId));
        }): getItems.then(res => {
          setArray(res);
        });
}, [catId]);
  return (

 <Container><Grid container spacing={2}>
   {array.length > 0?
 array.map((item,index) =>{
   return (
     <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
    <ItemDetail  description={item.description} nombre={item.nombre} img={item.img} precio={item.precio}></ItemDetail>   
    </Grid>

   )}):<CircularProgress />}</Grid></Container>);
 }

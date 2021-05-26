import  { useState ,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {Container,Grid} from '@material-ui/core';


 export default function ItemDetailContainer(){
 
const [array, setArray] = useState([]);

const getData = async () => {
  const arr = [
    {categoria: "Botines",nombre:"Botines Adidas Engage", marca: "Adidas",precio:2000,img:"img/BotinesAdidasEngage.jpg",description:
    "Los botines Adidas Engage te brindan un mejor control y amortiguación en tus pies. Usalos en canchas de césped natural. Dale a tu equipo esos pases precisos que se necesitan para alcanzar la gloria."} ];

  setTimeout(()=>{
  setArray(arr);
  }, 3000);

};

  useEffect(() => {
    
   getData();
    
  }, []);


  return (

 <Container><Grid container spacing={2}>
   {array.length > 0?
 array.map((item,index) =>{
   return (
     <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
    <ItemDetail  description={item.description} nombre={item.nombre} img={item.img} precio={item.precio}></ItemDetail>   
    </Grid>

   )}):<h1>Loading</h1>}</Grid></Container>);
 }

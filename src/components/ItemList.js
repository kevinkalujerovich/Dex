import  { useState ,useEffect} from 'react';
import Item from './Item';
import {Container,Grid} from '@material-ui/core';


 export default function ItemList(){
    
const [array, setArray] = useState([]);


  useEffect(() => {
    const arr = [
        {make: "Ford", model: "Mustang",year: 1969,img:"img/BotinesAdidasEngage.jpg"},
        {make: "Ferrari", model: "Spider",year: 1339,img:"img/Botines-Adidas-Copa-20.4-Tf.jpg"}, 
        {make: "BMW",model: "Clasic",year: 1930,img:"img/BotinesAdidasEngage.jpg"}, 
        {make: "BMW",model: "Clasic",year: 1930,img:"img/BotinesAdidasEngage.jpg"}, 
        {make: "BMW",model: "Clasic",year: 1930,img:"img/BotinesAdidasEngage.jpg"}, 
        {make: "BMW",model: "Clasic",year: 1930,img:"img/BotinesAdidasEngage.jpg"}, 
        {make: "BMW",model: "Clasic",year: 1930,img:"img/BotinesAdidasEngage.jpg"}
      ];
    const promise=new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(arr); 
      }, 3000);
    });
    promise.then((value)=>{
        setArray(value);
      }
    );
    
  }, []);


  return (

 <Container><Grid container spacing={2}>
   {array.length > 0?
 array.map((item,index) =>{
   return (
     <Grid item xs={12} sm={4} md={2} lg={2} key={index}>
    <Item   make={item.make} model={item.model} year={item.year} img={item.img}></Item>   
    </Grid>

   )}):<h1>Loading</h1>}</Grid></Container>);
 }

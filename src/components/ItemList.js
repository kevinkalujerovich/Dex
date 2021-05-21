import  { useState ,useEffect} from 'react';
import Item from './Item';


 export default function ItemList(){
    
const [array, setArray] = useState([]);


  useEffect(() => {
    const arr = [
        {make: "Ford", model: "Mustang",year: 1969},
        {make: "Ferrari", model: "Spider",year: 1339}, 
        {make: "BMW",model: "Clasic",year: 1930}, 
        {make: "BMW",model: "Clasic",year: 1930}, 
        {make: "BMW",model: "Clasic",year: 1930}
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
    <>
 <p>{array.length > 0?
 array.map((item,index) =>{
   return (
     <>
 <Item key={index} make={item.make} model={item.model} year={item.year}></Item>
  </>
  )})
 : 'Loading'}</p>
</>
  );
 }

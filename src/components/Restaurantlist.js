import React, { useEffect, useState } from 'react'
// import { NavItem } from 'react-bootstrap'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/RestaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantListReducer } from '../Reducers/RestaurantReducer';


function Restaurantlist() {

  //to hold value
  //[] to fetch array from json file
  const [allRestaurants,setRestaurants] = useState([]) 

  //function to call API to get all restaurant item from restaurant.json
  // const getRestaurants = async()=>{
  //   await fetch('/restaurants.json')
  //   .then((data)=>{
  //     data.json()
  //     .then((result)=>{
  //       setRestaurants(result.restaurants);//to convert of object array
  //     })
  //     // console.log(data);

  //   })
  // }

    // console.log(allRestaurants)
    const dispatch=useDispatch();
    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result
    useEffect(()=>{
       // getRestaurants()
        dispatch(RestaurantListAction());
        
    },[])

    return (
      <Row>{
        restaurantList.map(item=>(
        // <h1>{item.name}</h1>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Restaurantcards restaurant={item} />
        </Col>
        
        ))
}
          </Row>
    )
}
  
  

export default Restaurantlist
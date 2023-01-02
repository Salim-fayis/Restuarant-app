import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restaurantreview from './Restaurantreview';

function Viewrestaurant() {
    const params = useParams()
    console.log(params.id);
    //to hold value
    //[] to fetch array from json file
    const [allRestaurants, setRestaurants] = useState([])

    //function to call API to get all restaurant item from restaurant.json
    const getRestaurants = async () => {
        await fetch('/restaurants.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        setRestaurants(result.restaurants);//to convert of object array
                    })
                // console.log(data);

            })
    }

    // console.log(allRestaurants)
    useEffect(() => {
        getRestaurants()
    }, [])
    console.log(allRestaurants);

    const viewrest = allRestaurants.find(item => item.id == params.id)
    console.log(viewrest);
    return (
        <>
            {
                viewrest ?
                    (
                        <Row>
                            <Col>
                                <Image src={viewrest.photograph} fluid/>
                                {/* <image src={viewrest.photograph} fluid /> */}
                            </Col>
                            <Col>
                            <p>ID:{viewrest.id}</p>
                                <h3>Name:{viewrest.name}</h3>
                                <h4>Neighborhood:{viewrest.neighborhood}</h4>
                                <h5>Adress:{viewrest.address}</h5>
                                <h5>Cuisine_type:{viewrest.cuisine_type}</h5>
                                <Restoperation operate={viewrest.operating_hours} />
                                <br />
                                <br />
                                <Restaurantreview reviews={viewrest.reviews} />
                            </Col>
                        </Row>
                    ) : 'null'
            }
        </>
    )
        }
export default Viewrestaurant
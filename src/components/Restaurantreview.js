import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Restaurantreview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews);
  return (
    <>
{
       <><Button variant='dark'
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
              >
                  Click to see reviews
              </Button><div style={{ minHeight: '150px' }}>
                      <Collapse in={open} dimension="width">
                          <div id="example-collapse-text">
                              <Card body style={{ width: '400px' }}>
                                 {
                                    reviews.map(item=>(
                                        <>
                                            <p>{item.name} <span>{item.date}</span></p>
                                            <h3>Rating:{item.rating}</h3>
                                            <h6>Comments:{item.comments}</h6>
                                        </>
                                    ))
                                 }
                              </Card>
                          </div>
                      </Collapse>
                  </div></>
}
    </>
  )
}

export default Restaurantreview
import React, { useState } from "react";
import { Form,TextField } from "@shopify/polaris";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import StarRatingComponent from 'react-star-rating-component';

const DisplayForm = ({state}) => {
    const [rating,setRating] = useState(1);
    console.log(rating)
    return(
      <TransitionGroup>
      {state && (
          <CSSTransition
          timeout={300}
          classNames='transition'
          >
          <Form >
          <TextField
            label="NAME:"
            type="text"
            placeholder="Enter your name (public)"
          />
          <br/>
          <TextField
            label="EMAIL:"
            type="email"
            placeholder="Enter your email (private)"
          />
          <br/>
          <label>RATING:</label><br/>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={(e)=>setRating(e)}
            />
            <br/>
          <br/>
          <TextField
            label="REVIEW DESCRIPTION:"
            multiline={4}
            type="text"
          />
          <br/>
          <hr/>
        </Form>
          </CSSTransition>
      )}
      </TransitionGroup>

    )
}

export default DisplayForm;
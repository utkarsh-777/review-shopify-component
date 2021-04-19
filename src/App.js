import { Layout, AppProvider, Button,Card } from "@shopify/polaris";
import React, { useState } from "react";

import "./App.css"
import DisplayForm from "./components/displayForm";

const App = () => {
  const [display,setDisplay] = useState(false)

  return(
    <div>
      <AppProvider>
      <div className="card">
      <Card>
        <Layout>
        <Layout.Section >
        <div className='top'>
        <Card title="ORDER PLACED" subdued actions={[{content: 'Order Details'},{content: 'Invoice'}]}>
        <Card.Section>
        February 5,2021
        </Card.Section>
        </Card>
        </div>
        </Layout.Section>
        <div className='down'>
        <Layout>
          <Layout.Section twoThird>
          <Card
          title="Delivered Jan 7, 2021"
          sectioned
        >
        <p>Your Package was left near the door.</p>
        <br/>
        <Layout>
          <Layout.Section oneThird>
          <img
            alt=""
            width="60%"
            height="60%"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
          />
          </Layout.Section>
          <Layout.Section twoThird>
          <p>Integer non ornare turpis. Pellentesque sit amet feugiat nibh. Donec ultrices tortor sed felis auctor, non congue dui pellentesque. Suspendisse vel diam orci.</p>
          <br/>
          <p>Aenean vel porttitor arcu, sit amet mollis dui. Pellentesque ac dolor egestas, volutpat felis eu, convallis lorem. Cras neque eros, euismod nec ultricies non, laoreet a urna. Proin id turpis felis. Aliquam erat volutpat. Cras euismod velit tellus, sed eleifend felis gravida sed. Vivamus a elit nulla. </p>
          <br/>
          <p>Rs 300 /-</p>
          <br/>
          <Button destructive>Buy it again</Button>
          </Layout.Section>
        </Layout>
          
        </Card>
          </Layout.Section>
          <Layout.Section oneThird>

            <Button fullWidth primary>Track Package</Button>
            <br/><br/>
            <Button fullWidth outline>Return Item</Button>
            <br/>
            <Button fullWidth outline>Leave Seller Feedback</Button>
        
          </Layout.Section>
          </Layout>
          </div>
        </Layout>
        </Card>
       </div>

            <div style={{width:"20%",margin:"auto",marginTop:"100px"}}>
            <Button primary fullWidth onClick={()=>setDisplay(!display)}>{display ? "CANCEL REVIEW" : "WRITE A REVIEW"}</Button>
            </div> 
            <div style={{width:"90%",margin:"auto"}}> 
            <DisplayForm state={display} />
            </div> 
      </AppProvider>
    </div>
  )
}

export default App;



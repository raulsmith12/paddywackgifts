import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Carousel from 'react-bootstrap/Carousel';

function Slider1() {

    const homepageSliders = gql`
    {
      homepageSliders(first:1)
      {
        id,
        sliderImg {
            url
        }
      }
    }
    `;

    return (
        <Query query={homepageSliders}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const carItem = data.homepageSliders.map(item => (
                <Carousel.Item key={item.id}>
                    <img 
                        className="d-block w-100"
                        src={item.sliderImg.url}
                        alt="slide"
                    />
                </Carousel.Item>
            ))

            return (
                <Carousel controls={false} fade={true} indicators={false} pause={false}>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src="https://paddywackgifts.com/img/img_plc.png"
                            alt=""
                        />
                    </Carousel.Item>
                    {carItem}
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src="https://paddywackgifts.com/img/img_plc.png"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src="https://paddywackgifts.com/img/img_plc.png"
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            )
          }}
        </Query>
    )
}

export default Slider1;
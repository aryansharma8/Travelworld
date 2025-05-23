import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            }
        ]
    }

    return (
        <Slider {...settings}>
            <div className="testimonials py-4 px-3">
                <p>
                    "Booking through TravelWorld made our trip completely stress-free. The itinerary was perfect, and every detail was well-managed."
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
                    <div>
                        <h6 className="mb-0 mt-3">John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    "I had an amazing time in Bali thanks to this travel agency! The recommendations were spot on, especially the hidden gems."
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="Lia Frank" />
                    <div>
                        <h6 className="mb-0 mt-3">Lia Frank</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    "The whole booking process was smooth and transparent. Customer service was always available to help. Highly recommend!"
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="Stefan Hawking" />
                    <div>
                        <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    "Our family vacation to Japan during cherry blossom season was magical. The planning and tips provided were super helpful."
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="Stefan Hawking" />
                    <div>
                        <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    "Thanks to TravelWorld, we discovered hidden gems in Nusa Penida that we would’ve missed otherwise. A truly memorable trip!"
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="Stefan Hawking" />
                    <div>
                        <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials

/*import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slideToScroll:2,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lia Frank</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials*/
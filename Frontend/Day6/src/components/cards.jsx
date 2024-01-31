import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ProjectCard.css';

const Features = () => {
  const testimonials = [
    {
      name: '🌟User-Friendly Interface',
      image: 'https://img.freepik.com/premium-vector/get-your-hands-this-content-writing-flat-illustration_203633-7680.jpg?size=626&ext=jpg&ga=GA1.1.1401665743.1706003770&semt=ais',
      quote: "The app's interface is intuitive and user-friendly, making it easy for even the busiest person to navigate. User will be able to quickly find everything needed to plan the perfect baby shower.",
    },
    {
      name: '🎉Comprehensive Planning Tools:',
      image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-business-planning-concept_23-2149190172.jpg?size=626&ext=jpg&ga=GA1.1.1401665743.1706003770&semt=ais',
      quote: "TinyToes offers a wide range of planning tools that cover every aspect of the event. From creating guest lists to designing invitations, and even managing RSVPs, the app has it all.",
    },
    // Add more testimonials as needed
    {
        name: '💌 Invitations and RSVP Management:',
        image: 'https://img.freepik.com/free-vector/illustration-with-wedding-couple_23-2148405514.jpg?size=626&ext=jpg&ga=GA1.1.1401665743.1706003770&semt=sph',
        quote: "Designing and sending invitations through TinyToes was a breeze. The app also helps in keep track of RSVPs effortlessly, ensuring the user has an accurate headcount for the event.",
    },
    {
        name: '💡 Creative Theme Ideas:',
        image: 'https://img.freepik.com/free-vector/mind-map-concept-illustration_114360-1727.jpg?size=626&ext=jpg&ga=GA1.1.1401665743.1706003770&semt=sph',
        quote: "TinyToes has a plethora of creative ideas to choose themes. It helps user to customize the event to make it truly special and memorable.",
    },
    {
        name: '🎥 Photo and video fliming',
        image: 'https://img.freepik.com/premium-vector/videographer-services-template-hand-drawn-cartoon-illustration-with-record-video-production-movie_2175-7407.jpg?size=626&ext=jpg&ga=GA1.1.1401665743.1706003770&semt=ais',
        quote: "Encourage users to capture and share memorable moments within the app. Integration with social media or a dedicated gallery within the app.",
    }


  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // For fade effect
  };

  return (
    <div className="testimonial-container">
      <h2>Features</h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img className="testimonial-image" src={testimonial.image} alt="" height={100} width={80} />
            <div className="testimonial-content">
              <h5>{testimonial.name} <br /><span>{testimonial.role}</span></h5>
              <p>{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Features;

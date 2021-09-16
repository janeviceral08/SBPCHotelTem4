import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import Navbar from "./navbar.component"
import hero from "../files/img/hero.jpg"
import hr1 from "../files/img/home-room/hr-1.jpg"
import hr2 from "../files/img/home-room/hr-2.jpg"
import hr3 from "../files/img/home-room/hr-3.jpg"
import hr4 from "../files/img/home-room/hr-4.jpg"
import chooseus_bg from "../files/img/chooseus-bg.jpg"
import gallery1 from "../files/img/gallery/gallery-1.jpg"
import gallery2 from "../files/img/gallery/gallery-2.jpg"
import gallery3 from "../files/img/gallery/gallery-3.jpg"
import gallery4 from "../files/img/gallery/gallery-4.jpg"
import lb1 from "../files/img/latest-blog/lb-1.jpg"
import lb2 from "../files/img/latest-blog/lb-2.jpg"
import lb3 from "../files/img/latest-blog/lb-3.jpg"
import lb4 from "../files/img/latest-blog/lb-4.jpg"
import footer_bg from "../files/img/footer-bg.jpg"
import services1 from "../files/img/services/services-1.png"
import services2 from "../files/img/services/services-2.png"
import services3 from "../files/img/services/services-3.png"
import services4 from "../files/img/services/services-4.png"
import services5 from "../files/img/services/services-5.png"
import services6 from "../files/img/services/services-6.png"
import testimonial_left from "../files/img/testimonial-left.jpg"
import lan from "../files/img/lan.png"
import sign from "../files/img/home-about/sign.png"
import home_about from "../files/img/home-about/home-about.png"
import Carousel from 'react-bootstrap/Carousel'

const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        exercises: [],
        about_hotel: [],
        hotel_offer:[],
        carousel_header: [], 
        feedback: [],
        Hotel_Information: '',
        Name_of_Hotel: '',
        map_address: '',
        email: '',
        mobile: '',
        tel_no: '',
        website: '',
        address: '',
        hotel_city: '',
        title: '',
        subtitles: '',
        link: '',
        background_image: '',
        selectedDate :null,
        dates_value: [null, null],
        guest: "", 
		 check_out: "", 
		 check_in: "", 
		 room: "",
         header_text: "",
header_subtext: "",
header_image: "",

     };
  }

  componentDidMount() {
    const hotel = {  val: "project=6127126cae94bc64a5e4b23a", }
    axios.post('http://localhost:5000/room_type/', hotel)
	.then(response => {
	  this.setState({ exercises: response.data })
	})
	.catch((error) => {
	  console.log(error);
	})
      axios.post('http://localhost:5000/about_hotel/View_About_hotel/', hotel)
      .then(response => {
        this.setState({ about_hotel: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

      axios.post('http://localhost:5000/feedback/View_Feedback/', hotel)
      .then(response => {
        this.setState({ feedback: response.data })
      })
      .catch((error) => {
        console.log(error);
      })


      axios.post('http://localhost:5000/additional_info/View_Additional_Info/', hotel)
      .then(response => {
        this.setState({ 
            Hotel_Information: response.data.hotel_info,
             Name_of_Hotel: response.data.hotel_name,
             map_address:response.data.map_address,
            email: response.data.email,
            mobile:response.data.mobile,
            tel_no:response.data.tel_no,
            website:response.data.website,
            address:response.data.address,
            hotel_city: response.data.hotel_city,
            header_text: response.data.header_text,
            header_subtext: response.data.header_subtext,
            header_image: response.data.header_image,

            })
      }) 
      .catch((error) => {
        console.log(error);
      })

      axios.post('http://localhost:5000/carousel_header/View_Carousel_header/', hotel)
      .then(response => {
        this.setState({ carousel_header: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

      
  
  }

  handleDateChange = (date) => {
    this.setState({selectedDate:date});
  };


  
  select= event => {

    this.setState({
		[event.target.name]: event.target.value
    })
  }


  onSubmit = event => {
    const { room, check_in, check_out, guest } = this.state;
if( guest !== "" && check_out!== "" && check_in!== "" && room!== ""){
	this.props.history.push('/Add_inf/'+room+'/'+check_in+'/'+check_out+'/'+guest)
}
   else{
	console.log("Please Complete the fields");
   }
};

  render() {
    var myloop = [];
	for (let i = 1; i < 10; i++) {
		myloop.push(
		
		  <option value={i} key={i}>{i}</option>
		);
	  }
    
      const { room, check_in, check_out, guest } = this.state;

      const book = 'http://localhost:3000/Website_reserve?check_in='+check_in+'&&check_out='+check_out+'&&guest='+guest+'&&room='+room+'&&hotel='+"project=6127126cae94bc64a5e4b23a";
    
    return (
     
<body>
  

    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__logo">
            <a href="./index.html"><img src="../files/img/logo.png" alt=""/></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__btn__widget">
            <a href="#">Book Now <span className="arrow_right"></span></a>
        </div>
        <div className="offcanvas__widget">
            <ul>
                <li><span className="icon_pin_alt"></span> {this.state.address}</li>
                <li><span className="icon_phone"></span> {this.state.mobile} & {this.state.tel_no}</li>
            </ul>
        </div>
        <div className="offcanvas__language">
            <img src={lan} alt=""/>
            <span>English</span>
            <i className="fa fa-angle-down"></i>
            <ul>
                <li>English</li>
                <li>Bangla</li>
            </ul>
        </div>
        <div className="offcanvas__auth">
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </div>
    </div>
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <ul className="header__top__widget">
                            <li><span className="icon_pin_alt"></span>{this.state.address}</li>
                            <li><span className="icon_phone"></span>  {this.state.mobile} & {this.state.tel_no}</li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="header__top__right">
                            <div className="header__top__auth">
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>
                            <div className="header__top__language">
                                <img src={lan} alt=""/>
                                <span>English</span>
                                <i className="fa fa-angle-down"></i>
                                <ul>
                                    <li>English</li>
                                    <li>Bangla</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__nav__option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="header__nav">
                            <nav className="header__menu">
                                <ul className="menu__className">
                                    <li className="active"><Link to="/Home" style={{fontSize: 25}}>{this.state.Name_of_Hotel}</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header__nav">
                            <nav className="header__menu">
                                <ul className="menu__className">
                                    <li className="active"><Link to="/Home" >Home</Link></li>
                                    <li><Link to="/Room_Details" >Rooms</Link></li>
                                    <li><Link to="/Home" >About Us</Link></li>
                                    <li><Link to="/Contact" >Contact</Link></li>
                                   
                                </ul>
                            </nav>
                            <div className="header__nav__widget">
                                <a href="#">Book Now <span className="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open">
                    <span className="fa fa-bars"></span>
                </div>
            </div>
        </div>
    </header>
    <section className="hero spad set-bg" style={{ backgroundImage: `url(${this.state.header_image})`, backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
	}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hero__text">
                        <h5>{this.state.header_text}</h5>
                        <h2>{this.state.header_subtext}</h2>
                    </div>
                    <form onSubmit={this.onSubmit} className="filter__form">
                        <div className="filter__form__item filter__form__item--search">
                            <p>Room Type</p>
                            <div className="filter__form__input">
                            <select name="room" className="form-control"  onChange={this.select} style={{fontSize: 20,height: '40px'}}>
									  {this.state.exercises.map((currentexercise) => 
										  <option  style={{fontSize: 20}} value={currentexercise.temp_id}>{currentexercise.room_type}</option>
									  )

									  }
			                      	
			                      </select>
                                <span className="icon_search"></span>
                            </div>
                        </div>
                        <div className="filter__form__item">
                            <p>Check In</p>
                            <div className="filter__form__select">
                                <input type="date" className="filter__form__select" name="check_in" onChange={this.select} style={{width: '100%'}}/>
                               
                            </div>
                        </div>
                        <div className="filter__form__item">
                            <p>Check Out</p>
                            <div className="filter__form__select">
                                <input type="date" className="filter__form__select" name="check_out" onChange={this.select} style={{width: '100%'}}/>
                               
                            </div>
                        </div>
                        <div className="filter__form__item filter__form__item--select">
                            <p>Person</p>
                            <div className="filter__form__select">
                                <span className="icon_group"></span>
                                <select className="filter__form__select" style={{'float': 'right', width: '80%', fontSize: 20}} name="guest" onChange={this.select}>
                                {myloop}
                                </select>
                            </div>
                        </div>
                        <a class="primary-btn text-uppercase" href={book}> Book A Reservation</a>   								
                      
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section className="home-about">
        <div className="container">
            <div className="row">
                <Carousel>
               
                    {this.state.about_hotel.map((info, index)=>
                        <Carousel.Item interval={1000}>
                            <div className="col-lg-6">
                            <div className="home__about__text">
                                <div className="section-title">
                                    <h5>{info.subtitle}</h5>
                                    <h2>{info.title}</h2>
                                </div>
                                <p className="first-para">{info.description}</p>
                                
                            </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="home__about__pic">
                                    <img src={info.image1} alt="" height="600" />
                                </div>
                            </div>
                        </Carousel.Item>
                    )}
                    
                   
                </Carousel>
               
            </div>
        </div>
    </section>
    <section className="services spad">
        <div className="container">
            <div className="row">
                {this.state.carousel_header.map((info, index)=>
                 <div className="col-lg-4 col-md-4 col-sm-6">
                 <div className="services__item">
                     <img src={info.background_image} alt="" width="50" height="43"/>
                     <h4>{info.title}</h4>
                     <p>{info.subtitles}</p>
                 </div>
             </div>
                )}
             
            </div>
        </div>
    </section>
 
    <section class="testimonial spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="testimonial__pic">
                        <img src="img/testimonial-left.jpg" alt="" />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="testimonial__text">
                        <div class="section-title">
                            <h5>Testimonials</h5>
                            <h2>What do guests say about us?</h2>
                        </div>
                        <div class="testimonial__slider__content">
                            <div class="testimonial__slider">
                            <Carousel>
               
               {this.state.feedback.map((info, index)=>
                   <Carousel.Item interval={1000}>
                      <div class="testimonial__item">
                                    <h5>Detailed Review:</h5>
                                    {info.rate === 1?
                          <div class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                      </div>	:info.rate === 2?
                          <div class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                      </div>
                         :info.rate === 3?
                         <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                         :info.rate === 4?
                         <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>:
                     <div class="rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                 </div>
                        
                    
                    }
                                   
                                    <p>{info.feedback}</p>
                                    <div class="testimonial__author">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="testimonial__author__title">
                                                    <h5>{info.name}</h5>
                                                    <span>{info.address}</span>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                   </Carousel.Item>
               )}
               
              
           </Carousel>
                                
                               
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  

    <footer className="footer set-bg" style={{ backgroundImage: `url(${footer_bg})`, backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
	}}>

           
        <div className="container">
            <div className="footer__content">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <a href="#"><img src="../files/img/logo.png" alt=""/></a>
                            </div>
                            <h4>{this.state.mobile} & {this.state.tel_no}</h4>
                            <ul> 
                                <li>{this.state.address}</li>
                                <li>{this.state.email}</li>
                            </ul>
                            <div className="footer__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
                        <div className="footer__widget">
                            <h4>Quick Link</h4>
                            <ul>
                            <li className="active"><Link to="/Home" >Home</Link></li>
                                    <li><Link to="/Room" >Rooms</Link></li>
                                    <li><a href="./about.html">About Us</a></li>
                                    <li><Link to="/Contact" >Contact</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="footer__copyright">
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="footer__copyright__text">
                            <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <ul className="footer__copyright__links">
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</body>
    )
  }
}
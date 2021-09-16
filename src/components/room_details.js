import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import Navbar from "./navbar.component"
import breadcrumb from "../files/img/breadcrumb-bg.jpg"
import footer_bg from "../files/img/footer-bg.jpg"

//import hero1 from "../files/img/hero/hero-1.jpg"


const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default class Room_Details extends Component {
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
         header_image: "",
         header_text: "",
         header_subtext: "",
         hotel_image: "",
    };
  }

  componentDidMount() {
    const hotel = {  val: "project=60641fde66ceb2089b1bc468", }
    axios.post('http://localhost:5000/room_type/', hotel)
	.then(response => {
	  this.setState({ exercises: response.data })
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
            header_image: response.data.header_image,
            header_text: response.data.header_text,
            header_subtext: response.data.header_subtext,
            hotel_image: response.data.hotel_image,
            })
      }) 
      .catch((error) => {
        console.log(error);
      })

    
  }

  render() {

    return (
        <body>	
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__logo">
            <a href="./index.html"><img src="img/logo.png" alt="" /></a>
        </div>
        <nav class="offcanvas__menu mobile-menu">
            <ul>
            <li><Link to="/Home" >Home</Link></li>
                                    <li  className="active"><Link to="/Room_Details" >Rooms</Link></li>
                                    <li><Link to="/Home" >About Us</Link></li>
                                    <li><Link to="/Contact" >Contact</Link></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__btn__widget">
        <Link to="/Home">Book Now <span className="arrow_right"></span></Link>
        </div>
        <div class="offcanvas__widget">
            <ul>
            <li><span className="icon_pin_alt"></span>{this.state.address}</li>
                            <li><span className="icon_phone"></span>  {this.state.mobile} & {this.state.tel_no}</li>
            </ul>
        </div>
        <div class="offcanvas__language">
            <img src="img/lan.png" alt="" />
            <span>English</span>
            <i class="fa fa-angle-down"></i>
            <ul>
                <li>English</li>
                <li>Bangla</li>
            </ul>
        </div>
        <div class="offcanvas__auth">
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </div>
    </div>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <ul class="header__top__widget">
                        <li><span className="icon_pin_alt"></span>{this.state.address}</li>
                            <li><span className="icon_phone"></span>  {this.state.mobile} & {this.state.tel_no}</li>
                        </ul>
                    </div>
                    <div class="col-lg-5">
                        <div class="header__top__right">
                            <div class="header__top__auth">
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>
                            <div class="header__top__language">
                                <img src="img/lan.png" alt="" />
                                <span>English</span>
                                <i class="fa fa-angle-down"></i>
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
        <div class="header__nav__option">
            <div class="container">
                <div class="row">
                <div className="col-lg-4">
                    <div className="header__nav">
                            <nav className="header__menu">
                                <ul className="menu__className">
                                    <li className="active"><Link to="/Home" style={{fontSize: 25}}>{this.state.Name_of_Hotel}</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="header__nav">
                            <nav class="header__menu">
                                <ul>
                                <li><Link to="/Home" >Home</Link></li>
                                    <li  className="active"><Link to="/Room_Details" >Rooms</Link></li>
                                    <li><Link to="/Home" >About Us</Link></li>
                                    <li><Link to="/Contact" >Contact</Link></li>
                                </ul>
                            </nav>
                            <div class="header__nav__widget">
                            <Link to="/Home">Book Now <span className="arrow_right"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="canvas__open">
                    <span class="fa fa-bars"></span>
                </div>
            </div>
        </div>
    </header>
  
    <div class="breadcrumb-option set-bg" style={{ backgroundImage: `url(${breadcrumb})`, backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
	}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h1>Our Room</h1>
                        <div class="breadcrumb__links">
                        <Link to="/Home" >Home</Link>
                            <span>Rooms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="rooms spad">
        <div class="container">
            <div class="row">

                {this.state.exercises.map((rooms, index)=>
               
                   
                <div class="col-lg-6 p-0 order-lg-1 order-md-1 col-md-6">
                    <div class="room__text">
                    <img src={rooms.img==""?'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png':rooms.img} alt="" width="90%" height="300"/>
                        <h3>{rooms.room_type}</h3>
                        <h2><sup>₱</sup>{ rooms.rate_mode == "Daily"? currencyFormat(parseFloat( rooms.roomprice)):  rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Daily'?currencyFormat(parseFloat( rooms.roomprice)): rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Hour'?currencyFormat(parseFloat( rooms.roomprice)):currencyFormat(parseFloat( rooms.roomprice_hour))}<span>{ rooms.rate_mode == "Daily"? '/night':  rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Daily'?"("+ rooms.promo_duration+"nights)": rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Hour'?"/"+ rooms.hour_duration+"hours": "/"+ rooms.hour_duration+"hours"}</span></h2>
                        <a href="#">Details</a>
                        <ul>
                        <li><span>Price:</span><sup>₱</sup>{ rooms.rate_mode == "Daily"? currencyFormat(parseFloat( rooms.roomprice)):  rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Daily'?currencyFormat(parseFloat( rooms.roomprice)): rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Hour'?currencyFormat(parseFloat( rooms.roomprice)):currencyFormat(parseFloat( rooms.roomprice_hour))}</li>
                        <li><span>Duration:</span>{ rooms.rate_mode == "Daily"? 'Night':  rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Daily'? rooms.promo_duration+" Nights": rooms.rate_mode == "Promo" &&  rooms.duration_mode == 'Hour'? rooms.hour_duration+" Hours":  rooms.hour_duration+" Hours"}</li>
                            <li><span>Capacity:</span>Max person {rooms.max_person}</li>
                            
                        </ul>
                     
                    </div>
                </div>
                
            
                )}

               
               
              
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
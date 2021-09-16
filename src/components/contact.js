import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import Navbar from "./navbar.component"
import logo from "../files/img/logo.png"
import lan from "../files/img/lan.png"
import breadcrumb_bg from "../files/img/breadcrumb-bg.jpg"
import room1 from "../files/img/rooms/room-1.jpg"
import room2 from "../files/img/rooms/room-2.jpg"
import room3 from "../files/img/rooms/room-3.jpg"
import room4 from "../files/img/rooms/room-4.jpg"
import footer_bg from "../files/img/footer-bg.jpg"
import logo1 from "../files/img/logo/logo-1.png"
import logo2 from "../files/img/logo/logo-2.png"
import logo3 from "../files/img/logo/logo-3.png"
import logo4 from "../files/img/logo/logo-4.png"
import logo5 from "../files/img/logo/logo-5.png"



export default class Contact extends Component {
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
    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__logo">
            <a href="./index.html"><img src={logo} alt=""/></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__btn__widget">
        <Link to="/Home">Book Now <span className="arrow_right"></span></Link>
        </div>
        <div className="offcanvas__widget">
            <ul>
                <li><span className="icon_pin_alt"></span> 96 Ernser Vista Suite 437, NY, US</li>
                <li><span className="icon_phone"></span> (123) 456-78-910</li>
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
                                <li><Link to="/Home" >Home</Link></li>
                                    <li><Link to="/Room_Details" >Rooms</Link></li>
                                    <li><Link to="/Home" >About Us</Link></li>
                                    <li   className="active"><Link to="/Contact" >Contact</Link></li>
                                </ul>
                            </nav>
                            <div className="header__nav__widget">
                            <Link to="/Home">Book Now <span className="arrow_right"></span></Link>
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
    <div className="map">
        <iframe
            src={this.state.map_address}
            height="600" style={{border:0}} allowfullscreen=""></iframe>
    </div>
    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-5">
                    <div className="contact__widget">
                        <div className="contact__widget__item">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>{this.state.mobile}</li>
                                <li>{this.state.tel_no}</li>
                                <li>{this.state.email}</li>
                                 <li>{this.state.website}</li>
                            </ul>
                        </div>
                        <div className="contact__widget__item">
                            <h4>Address</h4>
                            <p>{this.state.address}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-7">
                    <div className="contact__form">
                        <h2>Your question?</h2>
                        <form action="#">
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Email"/>
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
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
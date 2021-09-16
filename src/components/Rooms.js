import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import cogoToast from 'cogo-toast';
import moment from "moment";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import img1 from "./jpg/1.jpg";
import img2 from "./jpg/2.jpg";
import img3 from "./jpg/3.jpg";
import img4 from "./jpg/4.jpg";
import img5 from "./jpg/5.jpg";



export default class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {exercises: [],   online: [], 
        rooms: [],setOpen:false, room: '', roomid: ''};
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
    axios.post('http://localhost:5000/reservation/reserve/', hotel)
	.then(response => {
	  this.setState({ online: response.data })
      console.log('online.data: ', response.data)
	})
	.catch((error) => {
	  console.log(error);
	})


    axios.post('http://localhost:5000/rooms/Room_List/', hotel)
	.then(response => {
        console.log('rooms: ', response.data )
	  this.setState({ rooms: response.data })
	})
	.catch((error) => {
	  console.log(error);
	})
      
  }

  vacnt (item) {

    const filter = item.temp_id;
    const filterRes = this.state.rooms.filter((item) => {return(item.room_type_id.indexOf(filter) >= 0 && item.status ==="Available")})
  
    return filterRes.length
  }

  total (item) {

    const filter = item.temp_id;
    const filterRes = this.state.rooms.filter((item) => {return(item.room_type_id.indexOf(filter) >= 0)})
  
    return filterRes.length
  }
   handleOpen = (room,id) => {
   this.setState({ setOpen:true, room: room, roomid: id })
  };

   handleClose = () => {
    this.setState({ setOpen:false, room: '', roomid: '' })
  };


  
  handleImageUpload  = () =>{
    cogoToast.success('Please wait a moment...');
   // const {  title  } = this.state;
    const { files } = document.querySelector("#uploaded")
    const formData = new FormData();
    formData.append('file', files[0]);        
    formData.append('upload_preset', 'bgzuxcoc');
    const options = {
      method: 'POST',
      body: formData,
    };
   
    
if(files[0] != undefined){


    return fetch('https://api.cloudinary.com/v1_1/kusinahanglan/image/upload', options)
    .then(res => res.json())
    .then(res => {
  
     const exercise = { 
    
      img: res.secure_url,
          id: this.state.roomid
        }

        axios.post('http://localhost:5000/room_type/update_img', exercise)
          .then(res =>{
            if(res.data === 'updated!'){
              window.location.reload()
            }
       
           // 
          })
      }

    )
    .catch(err => console.log(err))

    }
 
cogoToast.error('Please Select Image')
   
    

  }
  render() {
    return (
      <body class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
      
        <header class="main-header">
          <a href="" class="logo">
            <span class="logo-mini"><b>G</b></span>
            <span class="logo-lg"><b>Gloreto</b></span>
          </a>
          <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </a>
      
            <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">
                <li class="dropdown user user-menu">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <img src="dist/img/<?php echo $icon; ?>" class="user-image" alt=""/>
                    <span class="hidden-xs">Name Here</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="user-header">
                      <img src="dist/img/<?php echo $icon; ?>" class="img-circle" alt=""/>
      
                      <p> Name Here  <br/> Position
                        <small>Office</small>
                      </p>
                    </li>
                    <li class="user-footer">
                      <div class="pull-left">
                        <a href="profile.php" class="btn btn-default btn-flat">My Profile</a>
                      </div>
                      <div class="pull-right">
                        <a href="logout.php" onclick="return confirm('Are you sure you want to logout?')" class="btn btn-default btn-flat">Logout</a>
                      </div>
                    </li>
                  </ul>
                </li>
               
              </ul>
            </div>
          </nav>
        </header>
        <aside class="main-sidebar">
          <section class="sidebar">
 
            <ul class="sidebar-menu">
              <li class="header">MAIN NAVIGATION</li>
              <li class="treeview">
              <Link to="/">  
                  <i class="fa fa-user"></i> <span>Reservations</span>
                      <span class="pull-right-container">
                        <small class="label pull-right bg-green" style={{padding: 5, borderRadius: 50, marginTop: -10}}>{this.state.online.length}</small>
                      </span>
                      </Link>
              </li>
              <li class="treeview active">
              <Link to="/Rooms">  
                  <i class="fa fa-building"></i> <span>Rooms</span>
                  </Link>
              </li>
              <li class="treeview">
              <Link to="/Highlight_Activities" >  
                  <i class="fa fa-clipboard"></i> <span>Amenities</span>
                  </Link>
              </li>
              <li class="treeview">
              <Link to="/Vacation_Ideas" >  
                  <i class="fa fa-list-alt"></i> <span>About Hotel</span>
                  </Link>
              </li>
              <li class="treeview">
              <Link to="/Guest_FeedBack" >  
                  <i class="fa fa-users"></i> <span>Guest FeedBack</span></Link>
               
              </li>
              
              <li class="treeview">
                  <Link to="/Additional_Info" >  
                  <i class="fa fa-cogs"></i> <span>Additional Hotel Info</span></Link>
              </li>
             
            </ul>
          </section>
        </aside>
      
        <div class="content-wrapper">
          <section class="content-header">
            <h1>
              Rooms
            </h1>
            <ol class="breadcrumb">
              <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
              <li class="active">Rooms</li>
           
            </ol>
          </section>
      
          <section class="content">
            <div class="row">
              <div class="col-xs-12">

                <div class="box">
                  <div class="box-body">
                      <table class="table table-hover">
  <thead>
    <tr>
    
                        <th scope="col">#</th>
                        <th scope="col">Room</th>
                        <th scope="col">Vacant</th>
                        <th scope="col">Total Rooms</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Extra Person Price</th>
                        <th scope="col">Max Person</th>
                        <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
  { this.state.exercises.map((room,index) =>
    <tr>
                                    <td scope="row"><p>{index+1}</p></td>
                                    <td><p>{room.name}</p></td>
                                    <td><p>{this.vacnt(room)}</p></td>
                                    <td><p>{this.total(room)}</p></td>
                                    <td><p>{room.rate_mode === "Daily"? parseFloat(room.roomprice).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'): room.rate_mode ==="Hour"? parseFloat(room.roomprice_hour).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'): room.duration_mode ==="Daily"?parseFloat(room.roomprice).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'):parseFloat(room.roomprice).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }</p></td>
                                    <td><p>{room.rate_mode === "Daily"? room.rate_mode: room.rate_mode ==="Hour"? room.hour_duration+ ' '+ room.rate_mode: room.duration_mode ==="Daily"?room.promo_duration+ ' Days '+ room.rate_mode:room.promo_duration+ ' Hours '+ room.rate_mode }</p></td>
                                    <td><p>{parseFloat(room.extra_person_charge).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p></td>
                                    <td><p>{room.max_person}</p></td>
                                    <td>  <img src={room.img} className="displayed-image" width={150} height={100}  onClick={()=> this.handleOpen(room.name, room._id)} /></td>
                                </tr>



)

}

    
  </tbody>
</table>
<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={this.state.setOpen}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.setOpen}>
          <div style={{ backgroundColor: 'white',
    border: '2px solid #000',
    padding:40,
  width: '40%',
  marginTop: '10%',
marginLeft: '30%'
    
    }}>
            <h2 id="transition-modal-title">Upload Photo</h2>
           
            <input type="file" id="uploaded"/>
          
<button type="submit" name="import" class="btn btn-primary btn-sm" onClick={this.handleImageUpload} >&nbsp;&nbsp;Save&nbsp;&nbsp;</button> <br />
          </div>
        </Fade>
      </Modal>
                  </div>
                 
                </div>
              
              </div>
            
            </div>
         
          </section>
        
        </div>
        
    
      
      
      </div>
   
      </body>
    )
  }
}
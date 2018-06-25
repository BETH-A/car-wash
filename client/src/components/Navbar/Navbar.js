import React from "react";

const Navbar = () => (
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" id="company">Carwash Service & Detail</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" div="services">
          <a class="dropdown-item" href="#">Exterior Services</a>
		  <a class="dropdown-item" href="#">Interior Services</a>
          <a class="dropdown-item" href="#">Full Services</a>
          <a class="dropdown-item" href="#">Paint Correction Services</a>
          <a class="dropdown-item" href="#">Other Services</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Photo Gallery
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" div="gallery">
          <a class="dropdown-item" href="#">Domestic Vehicles</a>
          <a class="dropdown-item" href="#">Exotic Vehicles</a>
        </div>
      </li>
	  <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
    <li class="nav-item" id="appointment">
      <a class="nav-link" href="#">Book an Appointment</a>
    </li>
    </ul>
  </div>
</nav>
);

export default Navbar;

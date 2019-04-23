import React from 'react';
import '../css/navbar.css';
function NavBar() {
  return (
    <div className="navBar">
      <p id="name">
        Matthew<span className="blue">Berman</span>
      </p>
      <div id="contact">
        <p>Email: mjberman024@gmail.com</p>
        <p>Phone: (410) 935-0726</p>
        <p>
          Linkedin:{' '}
          <a href="https://www.linkedin.com/in/mjberman024/">mjberman024</a>
        </p>
      </div>

      <p />
    </div>
  );
}

export default NavBar;

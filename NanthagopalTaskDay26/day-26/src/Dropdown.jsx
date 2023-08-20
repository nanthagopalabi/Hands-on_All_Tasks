import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit'

function Dropdown() {
  return (
    <div className='drop'>
    <img id="logo" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"></img>
    <div className='dropdown'>
    <MDBDropdown>
      <MDBDropdownToggle><h2>Live Class</h2></MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link childTag='button'>
         <h2>Full Stack Development Program (FSD)</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
         <h2>IIT-M Advanced Programming & Data Science Program</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
         <h2>Automation & Testing Program</h2>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <MDBDropdown>
      <MDBDropdownToggle><h2>Practice</h2></MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link childTag='button'>
         <h2>CodeKata</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
          <h2>WebKata</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
          <h2>IDE Online Compiler</h2>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <MDBDropdown>
      <MDBDropdownToggle><h2>Resourse</h2></MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link childTag='button'>
          <h2>REWARDS</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
          <h2>REFERRAL</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
          <h2>BLOGS</h2>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <MDBDropdown>
      <MDBDropdownToggle><h2>Our Products</h2></MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link childTag='button'>
          <h2>Hacker Kids</h2>
        </MDBDropdownItem>
        <MDBDropdownItem link childTag='button'>
          <h2>GUVI for Corporates</h2>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
</div>
</div>
  )
}

export default Dropdown
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import "rsuite/dist/rsuite.min.css";


function DropdownComp() {
  return (
    <div className="dropdown">
           <label for="subjects">Choose a subject: </label> 
    <select name="subject-names" id="subject-names"> 
     <option value="All">All</option>  
        <option value="Art"><NavLink to="/art"> ART</NavLink></option> 
        {/* <option value="dave">Dave</option> 
        <option value="pumpernickel">Pumpernickel</option> 
        <option value="reeses">Reeses</option>  */}
    </select>
            {/* <Dropdown title="dropdown">
                
                <Dropdown.Item 

> 
                  
                </Dropdown.Item>
  
                <Dropdown.Item as="a" href=
                "https://www.geeksforgeeks.org/">
                    GATE
                </Dropdown.Item>
            </Dropdown> */}
        </div>
  )
}

export default DropdownComp

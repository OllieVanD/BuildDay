import React, {Component} from 'react'
import $ from 'jquery'
import donwntonImage from'./Images/Downton.jpg'
import skiingImage from'./Images/Skiing.gif'

export default class Header extends Component {
    // constructor(props)
    // {
    //     super(props)
    // }

    displayImage =  (image) => {
        $( function () {
          
          $(`#${image}Button`).on('click', function() {
            $(`#${image}`).css('display',  "block")
            
            if (image === 'Skiing'){
            setTimeout(function() { 
              $(`#${image}`).css('display', 'none')},7000)
            }
            else {
              setTimeout(function() { 
                $(`#${image}`).css('display', 'none')},3500)
              }
          })
        })
      }


render () {


   
return(

<div id="logo">
        <div id="logo_text">
        
          <h1><a href="index.html"> <span className="logo_colour">Oliver van der Reijden</span></a></h1>
          <img src={donwntonImage} id ="Downton" alt="" style={{display: "none"}} />
          <img src={skiingImage} id ="Skiing" alt="" style={{display: "none"}} />
        </div>
      </div>
)
} 
}
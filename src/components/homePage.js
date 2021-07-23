import React, {Component} from 'react'
import './css/homePage.css'
import donwntonImage from'./Images/Downton.jpg'
import skiingImage from'./Images/Skiing.gif'
import Lists from './list.js'
import $ from 'jquery'

export default class homePage extends Component {
    constructor(props)
    {
      super(props)
      this.state = {Github : {} }
    }


  displayImage = (image) => {
    $( function () {
      
      $(`#${image}Button`).on('click', function() {
        $(`#${image}`).css('display',  "block", 'z-index', '100')
        
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
  
  getGithub = ( ) => {
    
    const URL = "https://api.github.com/users/Ollievand"
    $.get(URL,  function(data) {
      $('#GithubRepos').html(`name : ${data.name},<br></br> id: ${data.id}`)
      
      
    })

  }

    render () {

        return( 
  <div id="main">
    
    <div id="header">
      

      {/* < Header /> */}
      <div id="logo">
        <div id="logo_text">
        
          <h1><a href="index.html"> <span className="logo_colour">Oliver van der Reijden</span></a></h1>
          <img src={donwntonImage} id ="Downton" alt="" style={{display: "none"}} />
          <img src={skiingImage} id ="Skiing" alt="" style={{display: "none"}} />
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
        <li className="selected"><a href="index.html">Home</a></li>
          {/* <li ><a href="examples.html">Github</a></li> */}
          {/* <li><a href="page.html"></a></li> */}
          {/* <li><a href="another_page.html">Another Page</a></li> */}
          {/* <li ><a href="contact.html">Contact Us</a></li> */}
        </ul>
      </div>
    </div>
    <div id="content_header"></div>
    <div id="site_content">
    <div className="sidebar">
      <Lists />
      <ul>
          <li><h4 id ='DowntonButton' onClick={this.displayImage("Downton")}>Served a charity dinner at Downton Abbey Click text to see photo!)</h4></li>
          <li><h4>plac</h4></li>
          <li><h4>Took a boat out to sea in Greece, only to realise 100m's out that there was a large whole underneath.</h4></li>
        </ul>
        <h3>Random things about me</h3>
        <ul>
          <li><h4 id='SkiingButton' onClick={this.displayImage("Skiing")}>I'm a terrible skier, click to see me in action!</h4></li>
        </ul>
          </div>

     
      <div id="content">
        <h1><strong>About me</strong></h1>
        <button onClick={this.getGithub}placeholder = 'Click to get Github details!'>Click to get Github details!</button>
        <h1 id = "GithubRepos">Github repos: </h1>
        
      </div>
    </div>
    <div id="content_footer">
     
    </div>
    
  </div>
  


        )
    }



}

requirement
//video play
*open 
   *drag and drop
   *play and pause
*playbackspeed->spped increase and decrease
*audio->level increase and decrease
*full screen 

position :relative; 
left:50px;
top:50px;
left:100px;
you move respect to your original respect 
you occupy your location if you are somehere else

position:absolute;
capacity:0.5;
.menu {
    position: relative; /* Parent ko relative position do */
  }
  
  .menu ul {
    position: absolute;  /* Dropdown ko absolute position do */
    top: 100%;           /* Parent ke neeche align karo */
    left: 0;
    background-color: #eee;
    display: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
  
  .menu:hover ul {
    display: block;
  }


  
  
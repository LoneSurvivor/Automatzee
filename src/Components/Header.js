import React from 'react'
import { NavMenu,NavLink} from './navele'
export default function Header() {
  
let aaa={
  fontSize: "1.45vw",
  
}
let au={
  fontSize:"2.9vw",
}

return  <nav style={aaa} class="navbar navbar-expand-lg navbar-light bg-light" >


<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>


<a class="navbar-brand" style={au} href="http://localhost:3000/">Automatzee</a>

<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  <li class="nav-item active">
    
  <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          
          </NavMenu>
          
  </li>     
</ul>

</div>
</nav>

}
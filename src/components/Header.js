import React,{Component} from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <nav class="navbar navbar-expand-xl navbar-primary bg-light">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Maths</a>
                                    <a class="dropdown-item" href="#">Programming</a>
                                    <a class="dropdown-item" href="#">Data and Information</a>
                                </div>
                            </li>
                            <li>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button> 
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>

                        <ul class="navbar mx-auto">
                            <a href="./Pages/Home.js">
                                <img src="assets/images/LogoFull.png" width="150" height="50" alt="" loading="lazy"></img>
                            </a>
                        </ul>

                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Forum</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Registration.js">Sign In</a>
                            </li>

                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;
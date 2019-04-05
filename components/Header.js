import Link from 'next/link'
import { withRouter } from 'next/router'

import AddButton from  './AddButton'
import { Twitter, GitHub, Users } from 'react-feather';

const Header = (props) => {console.log(props.router)
    return(
    <div>
        <div className="navbar">
        <div className="website-logo">
            <Link href="/"><a><img src='/static/images/daily-hack-logo.png'/></a></Link>
        </div>
        <div className="right-navbar">
            <ul>
                <li><Link href="/contributors"><a><Users color={'#4618B1'} size={18}/> <span>Contributors</span></a></Link></li>
                <li><a href="https://github.com/mddanishyusuf/dailyhack" target="_blank"><GitHub color={'#4618B1'} size={18}/> <span>GitHub</span></a></li>
                <li><a href="https://twitter.com/dailyhacknotes" target="_blank"><Twitter color={'#4618B1'} size={18} /> <span>Twitter</span></a></li>
            </ul>
        </div>
        </div>

        {props.router.asPath === "/" ? 
            <div className="landing-heading">
                <h2>A community of Makers and Geeks</h2>
                <p>It's a place where people share there daily hack they use in their developments. So, Do you have any hack?</p>
                <AddButton/>
            </div>
        : ""}
        
        <style jsx>
            {`
                .navbar {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    padding: 0px 60px;  
                    margin-bottom: 60px;         
                }

                .website-logo img{
                    width: 250px;
                }

                .landing-heading {
                    text-align: center;
                }

                .landing-heading h2 {
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    font-size: 40px;
                    line-height: 1.40455;
                    color: #202124;
                    letter-spacing: -.5px;
                }

                .landing-heading p {
                    max-width: 570px;
                    display: inline-block;
                }

                .right-navbar ul{
                    float: right;
                }

                .right-navbar ul li{
                    padding: 10px;
                    -moz-box-align: center;
                    align-items: center;
                    float: left;
                    list-style: none;
                }

                .right-navbar ul li a{
                    display: flex;
                    text-decoration: none;
                    color: #707070
                }


                .right-navbar ul li span {
                    padding: 0px 5px;
                }
            `}
        </style>
        
    </div>
)}

export default withRouter(Header);
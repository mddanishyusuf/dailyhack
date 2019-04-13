import Link from 'next/link'
import { withRouter } from 'next/router'
import { Twitter, GitHub, Users, Bell, Coffee } from 'react-feather';
import AddButton from  './AddButton'
import NotifyMeModal from './NotifyMeModal';


const Header = (props) => {
    return(
    <div>
        <div className="ph-banner"><a href="https://www.producthunt.com/posts/dailyhack-2" target="_blank">🔥 Hey, we are on ProductHunt Today. Support Us there. Thanks</a></div>
        <div className="navbar">
        <div className="website-logo">
            <Link href="/"><a><img src='/static/images/daily-hack-logo.png'/></a></Link>
        </div>
        <div className="right-navbar">
            <ul>
                <li><Link href="/contributors"><a><Users color={'#4618B1'} size={18}/> <span>Contributors</span></a></Link></li>
                <li><a className="btn" href="#open-modal"><Bell color={'#4618B1'} size={18}/> <span>Notify Me</span></a></li>
                <li><a href="https://www.buymeacoffee.com/mddanishyusuf" target="_blank"><Coffee color={'#4618B1'} size={18}/> <span>BMC</span></a></li>
                <li><a href="https://github.com/mddanishyusuf/dailyhack" target="_blank"><GitHub color={'#4618B1'} size={18}/> <span>GitHub</span></a></li>
                <li><a href="https://twitter.com/dailyhacknotes" target="_blank"><Twitter color={'#4618B1'} size={18} /> <span>Twitter</span></a></li>
            </ul>
        </div>
        <NotifyMeModal/>
        </div>

        {props.router.asPath === "/" ? 
            <div className="landing-heading">
                <h2>A Community of Makers and Geeks</h2>
                <p>It's a place where people share there daily hack they use in their developments. So, Do you have any hack?</p>
                <AddButton/>
            </div>
        : ""}
        
        <style jsx>
            {`

                .ph-banner {
                    font-size: 0.9rem;
                    text-align: center;
                    background-color: #da552f;
                    color: #fff;
                    padding: 5px;
                }
                .ph-banner a {
                    color: #fff;
                    text-decoration: none;
                }
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
                    padding: 0px 40px;
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
                    cursor: pointer;
                }

                .right-navbar ul li a{
                    display: flex;
                    text-decoration: none;
                    color: #707070;
                    font-size: 0.9rem;
                }


                .right-navbar ul li span {
                    padding: 0px 5px;
                }

                @media screen and (max-width: 700px) {
                    .navbar {
                        padding: 0px 10px; 
                        margin-bottom: 20px; 
                    }
                    .website-logo img{
                        width: 150px;
                    }
                    .right-navbar ul li span {
                        display: none;
                    }

                    .landing-heading h2 {
                        margin: 0;
                        padding: 20px;
                        font-weight: 500;
                        font-size: 30px;
                        line-height: 1.40455;
                        color: #202124;
                    }

                    .landing-heading p {
                        margin: 0;
                        padding: 0px 20px;
                    }
                }
            `}
        </style>
        
    </div>
)}

export default withRouter(Header);
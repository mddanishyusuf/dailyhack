import Link from 'next/link'
import { Twitter, GitHub, Users, Info, HelpCircle } from 'react-feather';

const Footer = function(props) {
    return (
        <footer>
            <div className="footer">
                <div className="footer-inner">
                    <p>A community build by <Link href="/contributors"><a>contributors</a></Link> for Makers & Geeks and website build by @mddanishyusuf</p>
                    <p>Website by <a href="https://twitter.com/mddanishyusuf" target="_blank">@mddanishyusuf</a> and <a href="https://twitter.com/fajarsiddiqFS" target="_blank">@fajarsiddiqFS</a></p>
                    <p>Build with <a href="https://nextjs.org/" target="_blank">Next.js</a> + <a href="https://developer.github.com/" target="_blank">GitHub APIs</a> + <a href="http://glitch.com/" target="_blank">Glitch</a> + <a href="https://github.com/mddanishyusuf/dailyhack/issues" target="_blank">GitHub Issues CMS</a> + <a href="https://zeit.co" target="_blank">Zeit</a></p>
                </div>
                <div className="footer-nav right-navbar">
                    <ul>
                        <li><a href="https://github.com/mddanishyusuf/dailyhack#-how-to-add-tricks" target="_blank"><HelpCircle color={'#4618B1'} size={18}/> <span>How to contribute</span></a></li>
                        <li><a href="https://github.com/mddanishyusuf/dailyhack/blob/master/README.md" target="_blank"><Info color={'#4618B1'} size={18}/> <span>About Us</span></a></li>
                        <li><Link href="/contributors"><a><Users color={'#4618B1'} size={18}/> <span>Contributors</span></a></Link></li>
                        <li><a href="https://github.com/mddanishyusuf/dailyhack" target="_blank"><GitHub color={'#4618B1'} size={18}/> <span>GitHub</span></a></li>
                        <li><a href="https://twitter.com/dailyhacknotes" target="_blank"><Twitter color={'#4618B1'} size={18} /> <span>Twitter</span></a></li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    .footer {
                        background-color: rgb(240, 237, 237);
                        margin-bottom: -15px;
                    }

                    @media screen and (min-width: 700px) {
                        .footer {
                            display: flex;
                            -moz-box-pack: justify;
                            justify-content: space-between;
                        }
                        

                        .footer-nav ul{
                            float: right;
                        }
        
                        .footer-nav ul li{
                            padding: 10px;
                            -moz-box-align: center;
                            align-items: center;
                            float: left;
                            list-style: none;
                        }
                        
                        .footer-nav {
                            padding: 40px;
                        }
                    }

                    .footer-inner {
                        padding: 40px;
                    }
                    .footer-inner p {
                        line-height: 1.2;
                        font-size: 0.9rem;
                    }
                    .footer-inner a{
                        color: #4618B1;
                    }

                    .footer-nav ul {
                        padding: 0;
                    }
    
                    .footer-nav ul li a{
                        display: flex;
                        text-decoration: none;
                        color: #707070;
                        font-size: 0.9rem;
                    }
                    
                    
                    .footer-nav {
                        padding: 40px;
                    }
        
                    .footer-nav ul li{
                        padding: 10px;
                        list-style: none;
                        display: inline-block;
                    }
    
                    .footer-nav ul li span {
                        padding: 0px 5px;
                    }
                `}
            </style>
        </footer>
    )
}

export default Footer;

import Link from 'next/link';
import { PlusSquare } from 'react-feather';

const AddButton = () => (
    <div style={{textAlign: 'center'}}>
        <div className="right-navbar">
            <ul>
                <li><a href="https://github.com/mddanishyusuf/dailyhack/issues" target="_blank"><PlusSquare color={'#4618B1'} size={18} /> <span>any trick?</span></a></li>
            </ul>
        </div>
        <style jsx>
            {`
                .right-navbar ul{
                    text-align: center;
                    display: inline-block;
                    padding: 0;
                    margin: 0 0 80px 0px;
                    border-radius: 4px;
                    color: #24292e;
                }

                .right-navbar ul li{
                    padding: 10px;
                    -moz-box-align: center;
                    align-items: center;
                    list-style: none;
                }

                .right-navbar ul li a{
                    display: flex;
                    text-decoration: none;
                    padding: 5px 15px;
                    border: 2px solid #707070;
                    text-decoration: none;
                    border-radius: 4px;
                    background-color: #C37501AD;
                }

                .right-navbar ul li span {
                    padding: 0px 5px;
                }
            `}
        </style>
        
    </div>
)

export default AddButton;
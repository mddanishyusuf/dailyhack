import Link from 'next/link';
import { PlusSquare } from 'react-feather';

const AddButton = () => (
    <div style={{textAlign: 'center'}}>
        <div className="right-navbar">
            <ul>
                <li><a href="https://github.com/mddanishyusuf/dailyhack/issues" target="_blank"><PlusSquare color={'#4618B1'} size={18} /> <span>Any Tricks?</span></a></li>
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
                    border: 1px solid rgba(27,31,35,.2);
                }

                .right-navbar ul li{
                    padding: 10px;
                    -moz-box-align: center;
                    align-items: center;
                    list-style: none;
                    padding: 8px 15px;
                    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
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
)

export default AddButton;
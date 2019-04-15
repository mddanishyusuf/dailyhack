import { Bell, XSquare } from 'react-feather';

function NotifyMeModal(){
    return(
      <div id="open-modal" className="modal-window">
      <div>
      <a href="#" title="Close" className="modal-close"><XSquare/><span>Close</span></a>
      <h1>Voilà! Notify Me.</h1>
      <div>Hey, You want to notify by GitHub whenever there is new tricks. Then it's Easy just go to this Project Repository and click on `Watch` + `Star`. That's it.</div>
      <div className="repo-buttons">
        <div>
          <h3>To Subscibe</h3>
          <iframe src="https://ghbtns.com/github-btn.html?user=mddanishyusuf&repo=dailyhack&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>
        <div>
          <h3>To Appreciate</h3>
          <iframe src="https://ghbtns.com/github-btn.html?user=mddanishyusuf&repo=dailyhack&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>
      </div>
      </div>
            <style jsx>
                {`
                    .repo-buttons {
                      display: grid;
                      grid-template-columns: 50% 50%
                    }
                    .modal-window {
                        position: fixed;
                        background-color: rgba(0, 0, 0, 0.5);
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        z-index: 999;
                        opacity: 0;
                        pointer-events: none;
                        transition: all 0.3s;
                      }
                      .modal-window:target {
                        opacity: 1;
                        pointer-events: auto;
                      }
                      .modal-window > div {
                        width: 50%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                                transform: translate(-50%, -50%);
                        padding: 2em;
                        background: #ffffff;
                        border-radius: 4px;
                        box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
                      }
                      .modal-window header {
                        font-weight: bold;
                      }
                      .modal-window h1 {
                        font-size: 150%;
                        margin: 0 0 15px;
                      }
                      
                      .modal-close {
                        display: flex;
                        color: #aaa;
                        line-height: 20px;
                        font-size: 80%;
                        position: absolute;
                        right: 0;
                        text-align: center;
                        top: 0;
                        width: 70px;
                        text-decoration: none;
                        margin-top: 20px;
                      }
                      .modal-close:hover {
                        color: black;
                      }
                      
                      .container {
                        display: grid;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                      }
                      
                      .modal-window div:not(:last-of-type) {
                        margin-bottom: 15px;
                      }
                      
                      small {
                        color: #aaa;
                      }
                      
                      .btn {
                        background-color: #fff;
                        padding: 1em 1.5em;
                        border-radius: 3px;
                        text-decoration: none;
                      }
                      .btn i {
                        padding-right: 0.3em;
                      }

                      @media screen and (max-width: 700px){
                        .modal-window > div {
                          width: 90%;
                        }
                      }
                      
                `}
            </style>
  </div>
    )
}

export default NotifyMeModal;
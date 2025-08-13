import './HeadFootStyle.css';

function Footer(){

    return(
        <div className='headerFooter'>
            <h6>Where all good pages come to rest</h6>
            <p>&copy; Copyright Matthew Asmunt <br />
            
                <a href="https://www.linkedin.com/in/matthew-asmunt/" target="_blank" title='Check out my LinkedIn'>
                    LinkedIn
                </a>
                 &nbsp;
                 <a href="https://github.com/MattAsm" target="_blank" title='Check out my GitHub'>
                    GitHub
                </a>
            </p>
        </div>
    );
}

export default Footer;
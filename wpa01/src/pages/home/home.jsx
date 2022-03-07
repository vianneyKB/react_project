import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.components'
const Home = () => {

    return (
        <>
            <ContactForm />
            <div className="w3-top">
                <div className="w3-bar w3-white w3-card" id="myNavbar">
                    <a href="#home" className="w3-bar-item w3-button w3-wide">LOGO</a>

                    <div className="w3-right w3-hide-small">
                        <a href="/work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
                        <a href="/contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
                    </div>

                    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>

            <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
                style={{ display: "none" }} id="mySidebar">
                <a href="javascript:void(0)" className="w3-bar-item w3-button w3-large w3-padding-16">Close
                    ×</a>
                <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
                <a href="#team" className="w3-bar-item w3-button">TEAM</a>
                <a href="#work" className="w3-bar-item w3-button">WORK</a>
                <a href="#pricing" className="w3-bar-item w3-button">PRICING</a>
                <a href="#contact" className="w3-bar-item w3-button">CONTACT</a>
            </nav>

            <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
                <div className="w3-display-left w3-text-white" style={{ padding: "48px" }}>
                    <span className="w3-jumbo w3-hide-small">Start something that matters</span><br />
                    <span className="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br />
                    <span className="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
                    <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
                </div>
                <div className="w3-display-bottomleft w3-text-grey w3-large" style={{ padding: "24px 48px" }}>
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
            </header>

            <footer className="w3-center w3-black w3-padding-64">
                <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
                <div className="w3-xlarge w3-section">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank"
                    className="w3-hover-text-green">w3.css</a></p>
            </footer>

            {/* <script>
    function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }
    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");
    function w3_open() {
      if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
      } else {
        mySidebar.style.display = 'block';
      }
    }

    // Close the sidebar with the close button
    function w3_close() {
      mySidebar.style.display = "none";
    }
  </script> */}

        </>
    )
}

export default Home;
import React from 'react';
const Work = () => {

    return (
        <>

            <div className="w3-top">
                <div className="w3-bar w3-white w3-card" id="myNavbar">
                    <a href="#home" className="w3-bar-item w3-button w3-wide">LOGO</a>

                    <div className="w3-right w3-hide-small">
                        <a href="/work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
                        <a href="/contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
                    </div>

                    <a className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>

            <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
                style={{ display: "none" }} id="mySidebar">
                <a className="w3-bar-item w3-button w3-large w3-padding-16"> Close
                    ×</a>
                <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
                <a href="#team" className="w3-bar-item w3-button">TEAM</a>
                <a href="#work" className="w3-bar-item w3-button">WORK</a>
                <a href="#pricing" className="w3-bar-item w3-button">PRICING</a>
                <a href="#contact" className="w3-bar-item w3-button">CONTACT</a>
            </nav>

            <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
                <h3 className="w3-center">OUR WORK</h3>
                <p className="w3-center w3-large">What we've done for people</p>

                <div className="w3-row-padding" style={{ marginTop: "64px" }}>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_mic.jpg" style={{ width: "100%" }} className="w3-hover-opacity"
                            alt="A microphone" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_phone.jpg" style={{ width: "100%" }} className="w3-hover-opacity"
                            alt="A phone" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_drone.jpg" style={{ width: "100%" }} className="w3-hover-opacity"
                            alt="A drone" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_sound.jpg" style={{ width: "100%" }} className="w3-hover-opacity"
                            alt="Soundbox" />
                    </div>
                </div>

                <div className="w3-row-padding w3-section">
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_tablet.jpg" style={{ width: "100%" }} className="w3-hover-opacity"
                            alt="A tablet" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_camera.jpg" style={{ width: "100%" }} className="w3-hover-opacity"
                            alt="A camera" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_typewriter.jpg" style={{ width: "100%" }}
                            className="w3-hover-opacity" alt="A typewriter" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src="/w3images/tech_tableturner.jpg" style={{ width: "100%" }}
                            className="w3-hover-opacity" alt="A tableturner" />
                    </div>
                </div>
            </div>

            <div id="modal01" className="w3-modal w3-black" >
                <span className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
                    title="Close Modal Image">×</span>
                <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                    <img id="img01" className="w3-image" />
                    <p id="caption" className="w3-opacity w3-large"></p>
                </div>
            </div>

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
    function onClick(element)
    {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
    }

    function w3_open() 
    {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
        } else {
            mySidebar.style.display = 'block';
        }
    }

    function w3_close() 
    {
        mySidebar.style.display = "none";
    }
</script> */}
        </>

    )
}

export default Work;
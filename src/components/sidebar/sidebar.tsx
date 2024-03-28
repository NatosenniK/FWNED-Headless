import * as React from "react"
import './sidebar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
function Sidebar() {

    return (
        <>
            <div className="sidebar col-12 col-lg-3">
                <div className="sidebar-heading mb-5">
                    FOLLOW FWNED
                </div>
                <div className="d-flex justify-content-around mb-5">
                    <Link to="https://facebook.com/fwned" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="5x" />
                    </Link>
                    <Link to="https://x.com/fwned" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} size="5x" />
                    </Link>
                </div>
                <div className="sidebar-heading mb-5">
                    POPULAR POSTS
                </div>
                
            </div>
        </>
    )
}
export default Sidebar
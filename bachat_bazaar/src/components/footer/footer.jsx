import React from "react"
import "./footer.css"

export function Footer() {
    return (
        // <footer className="footer">
        //     <p>Made by  <i className="red-color fas fa-heart"></i> Arpit Gupta </p>
        //     <ul style={{ listStyle: "none" }} >
        //         <li className="p1 inline"><a href="#" target="_blank"><i className="fab fa-github"></i></a></li>
        //         <li className="p1 inline"><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
        //         <li className="p1 inline"><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
        //     </ul>


        //     <div>© copyright 2023</div>
        // </footer>
        <footer>
            <div class="content">
                <div class="top">
                    <div class="logo-details">
                        <span class="logo_name">Bachat Bazaar</span>
                    </div>
                    <div class="media-icons">
                        <a target="on_blank" href="#"><i class="fab fa-facebook"></i></a>
                        <a target="on_blank" href="#"><i class="fab fa-instagram"></i></a>
                        <a target="on_blank" href="#"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div class="link-boxes">
                    <ul class="box">
                        <li class="link_name">Links</li>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>


                    </ul>
                    <ul class="box">
                        <li class="link_name">Recommended</li>
                        <li><a href="">Jackets</a></li>
                        <li><a href="">Mufflers</a></li>
                        <li><a href="">Sweat shirts</a></li>
                        <li><a href="">Hoodies</a></li>

                    </ul>
                    <ul class="box">
                        <li class="link_name">Legal Info</li>
                        <li><a href="">Licence</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy Policies</a></li>

                    </ul>
                    <ul class="box">
                        <li class="link_name">Contact</li>
                        <li><a target="on_blank" href="tel:+9190909090">+91 9070907090</a></li>
                        <li><a target="on_blank" href="mailto:'connectpicoindia@gmail.com'">mycontact.arpit@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div class="bottom-details">
                <div class="bottom_text">
                    <span class="copyright_text">Copyright © 2023 <a href="#">Bachat bazaar.</a></span>
                </div>
            </div>
        </footer>
    )
}
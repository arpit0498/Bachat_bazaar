import React from "react"
import "./footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <p>Made by  <i className="red-color fas fa-heart"></i> Arpit Gupta </p>
            <ul style={{ listStyle: "none" }} >
                <li ><a href="#" target="_blank"><i className="fab fa-github"></i></a></li>
                <li ><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li ><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
            <div>© copyright 2023</div>
        </footer>
    )
}
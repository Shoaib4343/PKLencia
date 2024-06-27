import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedin, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/Images/p-letter-logo-concept-isolated-on-white-background-vector.jpg"

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-10 text-gray-400 rounded-t-lg px-24">
            <div className="container mx-auto grid grid-cols-5 gap-8">
                <div>
                    <h5 className="text-white mb-3">Categories</h5>
                    <ul>
                        <li><a href="#" className="hover:text-white">Programming & Tech</a></li>
                        <li><a href="#" className="hover:text-white">Graphics & Design</a></li>
                        <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
                        <li><a href="#" className="hover:text-white">Writing & Translation</a></li>
                        <li><a href="#" className="hover:text-white">Video & Animation</a></li>
                        <li><a href="#" className="hover:text-white">AI Services</a></li>
                        <li><a href="#" className="hover:text-white">Music & Audio</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white mb-3">About</h5>
                    <ul>
                        <li><a href="#" className="hover:text-white">Our Story</a></li>
                        <li><a href="#" className="hover:text-white">Team</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white mb-3">Support and Education</h5>
                    <ul>
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Tutorials</a></li>
                        <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white mb-3">Community</h5>
                    <ul>
                        <li><a href="#" className="hover:text-white">Events</a></li>
                        <li><a href="#" className="hover:text-white">Forums</a></li>
                        <li><a href="#" className="hover:text-white">Meetups</a></li>
                        <li><a href="#" className="hover:text-white">Stories</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white mb-3">Business Solutions</h5>
                    <ul>
                        <li><a href="#" className="hover:text-white">Enterprise Solutions</a></li>
                        <li><a href="#" className="hover:text-white">Partnerships</a></li>
                        <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
                        <li><a href="#" className="hover:text-white">Reseller Program</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center mt-10  pr-24">
                <div className="flex items-center">
                    <img src={logo} alt="PKLancea" className="h-10 mr-2 mix-blend-difference" />
                    <span className="text-gray-400">© 2024 PKLancea. All rights reserved.</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" aria-label="TikTok"><FaTiktok className="text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram className="text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Facebook"><FaFacebook className="text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Pinterest"><FaPinterest className="text-gray-400 hover:text-white" /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter className="text-gray-400 hover:text-white" /></a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">English</a>
                    <a href="#" className="text-gray-400 hover:text-white">PKR</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

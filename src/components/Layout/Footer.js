"use client";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-[#122e42] text-gray-200 p-4">
      <div className="flex justify-around">
        <div className="footer-section mt-8 mb-8">
          <h4 className="text-lg font-semibold mb-2">Main Links</h4>
          <ul className="list-none">
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">New Arrivals</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">Gift Combos</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">Clearance Zone</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">Coupons & Offers</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">Photos & Reviews</a></li>
          </ul>
        </div>
        <div className="footer-section mt-8 mb-8">
          <h4 className="text-lg font-semibold mb-2">Side Links</h4>
          <ul className="list-none">
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">FAQ</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">100 Days Return Policy</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">About Us</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#29b6ff] block py-1 font-light">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section mt-8 mb-8">
          <h4 className="text-lg font-semibold mb-2">Also Available On:</h4>
          <ul className="list-none">
            <li><a href="#" className="hover:text-[#29b6ff] flex items-center pl-3 py-1">
            <Icon icon="ri:amazon-fill" />
              <span className="">&nbsp;Amazon</span></a></li>
              <li><a href="#" className="hover:text-[#29b6ff] flex items-center pl-3 py-1">
              <Icon icon="simple-icons:flipkart" />
              <span className="">&nbsp;Flipkart</span></a></li>
              <li><a href="#" className="hover:text-[#29b6ff] flex items-center pl-3 py-1">
              <Icon icon="arcticons:myntra" />
              <span className="">&nbsp;Myntra</span></a></li>
            
          </ul>
        </div>
        <div className="footer-section mt-8 mb-8">
          <h4 className="text-lg font-semibold mb-2">Social Media</h4>
          <ul className="list-none">
            <li><a href="#" className="hover:text-[#29b6ff] flex items-center py-1">
            <Icon icon="line-md:discord" />
              <span className="">&nbsp;Discord</span></a></li>
              <li><a href="#" className="hover:text-[#29b6ff] flex items-center py-1">
              <Icon icon="line-md:instagram" />
              <span className="">&nbsp;Instagram</span></a></li>
              <li><a href="#" className="hover:text-[#29b6ff] flex items-center py-1">
              <Icon icon="icon-park-outline:youtube" />
              <span className="">&nbsp;YoutTube</span></a></li>
              <li><a href="#" className="hover:text-[#29b6ff] flex items-center py-1">
              <Icon icon="mingcute:linkedin-line" />
              <span className="">&nbsp;LinkedIn</span></a></li>
            
          </ul>
        </div>
      </div>
      </div>
      <div className="bg-[#d9e2e5] text-gray-800 p-4 text-center font-extralight text-xs">
        <p className="mb-2 mt-4">
          All artworks posted on this website are intended as fan art and are not purported to be official merchandise unless indicated otherwise. If you have any issues regarding the artwork, please write to us at care@comicsense.xyz.
        </p>
        <p className="mb-4">Copyright © {currentYear} ComicSense</p>
      </div>
    </footer>
    
  );
};
export default Footer;

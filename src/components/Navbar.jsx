import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Navbar = ({ navOpen }) => {
    const navRefs = useRef([]);
    const activeBox = useRef();

    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link' },
        { label: 'Education', link: '#education', className: 'nav-link' },
        { label: 'Projects', link: '#projects', className: 'nav-link' },
        { label: 'Skills', link: '#skills', className: 'nav-link' },
        { label: 'Miscellaneous', link: '#misc', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
    ];

    useGSAP(() => {

        navItems.forEach((item, index) => {
            const sectionId = item.link;
            ScrollTrigger.create({
                trigger: sectionId,
                start: "top center",
                end: "bottom center",
                onEnter: () => updateActiveBox(navRefs.current[index]),
                onEnterBack: () => updateActiveBox(navRefs.current[index])
            });
        });

        // initializeInternalScrollTriggers();

        // Refresh ScrollTrigger after everything is set up
        var imageList = document.images;
        var len = imageList.length;
        var imgCounter = 0;

        [].forEach.call(imageList, function (img) {
          if (img.complete) {
            incrementImgCounter();
          }
          else {
            img.addEventListener('load', incrementImgCounter, false);
          }
        });
    
        function incrementImgCounter() {
          imgCounter++;
          if (imgCounter === len) {
            ScrollTrigger.refresh();
          }
        }

    }, [navItems]);

    const updateActiveBox = (element) => {
        if (activeBox.current && element) {
            activeBox.current.style.top = `${element.offsetTop}px`;
            activeBox.current.style.left = `${element.offsetLeft}px`;
            activeBox.current.style.width = `${element.offsetWidth}px`;
            activeBox.current.style.height = `${element.offsetHeight}px`;
        }
    };

    return (
        <nav className={`navbbar${navOpen ? ' active' : ''}`}>
            {navItems.map((item, index) => (
                <a 
                    href={item.link} 
                    key={index} 
                    ref={el => navRefs.current[index] = el}
                    className={item.className}
                    onClick={(e) => updateActiveBox(e.currentTarget)}>
                    {item.label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;
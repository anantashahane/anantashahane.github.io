import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const navRefs = useRef([]);
    const activeBox = useRef();

    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link' },
        { label: 'Education', link: '#education', className: 'nav-link' },
        { label: 'Projects', link: '#projects', className: 'nav-link' },
        { label: 'Skills', link: '#skills', className: 'nav-link' },
        { label: 'Miscelleneous', link: '#misc', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
    ];
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const index = navItems.findIndex(item => `#${entry.target.id}` === item.link);
                  if (index !== -1) {
                      updateActiveBox(navRefs.current[index]);
                  }
              }
          });
      }, {
          rootMargin: '0px',
          threshold: 0.1
      });

      // Adding observer to each section that corresponds to a nav item
      navItems.forEach((item, index) => {
          const section = document.querySelector(item.link);
          if (section) {
              observer.observe(section);
          }
      });

      return () => {
          navItems.forEach(item => {
              const section = document.querySelector(item.link);
              if (section) {
                  observer.unobserve(section);
              }
          });
      };
  }, []);

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
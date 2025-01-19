import React from "react";

import PropTypes from "prop-types";

const ButtonPrimary = ({
    href,
    target= "_self",
    label,
    icon,
    classes = ""
}) => {
    if (href) {
        return (
            <a href={href}
            target={target}
            className={"bttn bttn-primary " + classes}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={"bttn bttn-primary " +  classes}>
                {label}
                {icon ? <span className="material-symbols-rounded animate-bounce" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}


ButtonPrimary.propType = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

const ButtonOutline = ({
    href,
    target= "_self",
    label,
    icon,
    classes=""
}) => {
    if (href) {
        return (
            <a href={href}
            target={target}
            className={"bttn bttn-outline " + classes}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={"bttn bttn-outline " +  classes}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}


ButtonOutline.propType = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


export {
    ButtonPrimary, 
    ButtonOutline
}
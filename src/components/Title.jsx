import React from "react";
import PropTypes from "prop-types";

const Title = ({
    label,
    classes = ""
}) => {
    return (
    <div
        className={"headline-2 lg:m-4 reveal-up " + classes}
    >{label}</div>
    )
}

Title.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default Title
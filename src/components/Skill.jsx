import React from "react";

import PropTypes from "prop-types";

const Skill = ({
    logo,
    skillName,
    color1,
    color2
}) => {
    return (
        <div className={"flex items-center shadow-lg flex-col flex-shrink-0 rounded-lg p-2 w-36 gap-2 bg-gradient-to-br " + color1 + " " + color2}>
            <img src={logo} 
            alt={skillName} className="w-20 h-20" />
            <span className="text-sm font-mono text-zinc-200">{skillName}</span>
        </div>
    )
}

Skill.propTypes = {
    logo : PropTypes.string.isRequired,
    skillName : PropTypes.string.isRequired,
    color1 : PropTypes.string.isRequired,
    color2 : PropTypes.string.isRequired
}

export default Skill

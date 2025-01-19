import React from "react";
import PropTypes from "prop-types";


const EducationCard = ({
    imgLink,
    title,
    subtitle,
    body,
    accomplishment,
    score
}) => {
    if (accomplishment) {
        return (
            <div className="card card-compact bg-gradient-to-br from-zinc-800 to-zinc-700 max-w-[600px] m-2 shadow-lg">
                <figure>
                    <img
                        src={imgLink}
                    alt={imgLink} />
                </figure>
                <div className="card-body card-compact text-left">
                    <h2 className="card-title text-zinc-100">{title}</h2>
                    <h3 className="text-zinc-200 mx-2 flex">{subtitle}</h3>
                    <p className="pl-4 text-sm text-zinc-300 flex">{body}</p>
                    <div className="pl-4 flex text-zinc-400 gap-2 items-center">
                        <span className="material-symbols-rounded text-yellow-500 animate-pulse">award_star</span>
                        <p className="text-sm">{accomplishment}</p>
                    </div>
                    <p className="text-sm text-zinc-400 flex justify-center font-mono">{score}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card card-compact bg-gradient-to-br from-zinc-800 to-zinc-700 max-w-[600px] m-2 shadow-lg">
                <figure>
                    <img
                        src={imgLink}
                    alt={imgLink} />
                </figure>
                <div className="card-body card-compact">
                    <h2 className="card-title text-zinc-100">{title}</h2>
                    <h3 className="text-zinc-200 ml-2">{subtitle}</h3>
                    <p className="pl-4 text-sm text-zinc-300">{body}</p>
                    <p className="text-sm text-zinc-400 flex justify-center font-mono">{score}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        )
    }
}

EducationCard.propType = {
    imgLink : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    accomplishment : PropTypes.string,
    score : PropTypes.string.isRequired
}

export default EducationCard

import React from "react";
import PropTypes from "prop-types";

import { ButtonPrimary } from "./Button";

const ProjectCard = ({
    imgLink,
    title,
    subtitle,
    description,
    accomplishment,
    tags,
    links
}) => {
    // Render tags
    const tagsRendered = () => {
        return tags.map((item, index) => (
            <div key={index} className="badge badge-outline">
                {item}
            </div>
        ));
    };

    // Render links
    const linksRendered = () => {
        return links?.map((item, _) => (
            <ButtonPrimary href={item[0]} label={item[1]} icon="chevron_right" classes={"bg-purple-300"} target={item[2]} />
        ));
    };

    const descriptionRender = () => {
        return description.split('\n').map((line, _) => (
        <li>{line}</li>
        ));
    };

    return (
        <div className="card bg-zinc-800 max-w-2xl card-compact">
          <figure>
            <img
              src={imgLink}
              alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-zinc-100">{title}</h2>
            <p className="font-semibold text-zinc-200 text-sm">{subtitle}</p>
            <p className="text-zinc-300">{descriptionRender()}</p>
            <div className="flex flex-wrap gap-2 text-zinc-400">{tagsRendered()}</div>
            <div className="card-actions justify-end">
              {linksRendered()}
            </div>
          </div>
        </div>
    );
};

// Corrected PropTypes
ProjectCard.propTypes = {
    imgLink: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accomplishment: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.string).isRequired // Enforce [string, string] format
    )
};

export default ProjectCard;
import { Link } from "react-router-dom";

function ExpertCard({ expert }) {

    return (

        <div className="expert-card">

            <div className="expert-card-top">

                <div className="expert-avatar">
                    {expert.name.charAt(0)}
                </div>

                <div>
                    <h2>{expert.name}</h2>
                    <p className="expert-category">
                        {expert.category}
                    </p>
                </div>

            </div>

            <div className="expert-info">

                <div className="info-row">
                    <span>Experience</span>
                    <strong>
                        {expert.experience} Years
                    </strong>
                </div>

                <div className="info-row">
                    <span>Rating</span>
                    <strong>
                        ⭐ {expert.rating}
                    </strong>
                </div>

            </div>

            <Link
                to={`/experts/${expert._id}`}
                className="primary-btn"
            >
                View Details
            </Link>

        </div>
    );
}

export default ExpertCard;
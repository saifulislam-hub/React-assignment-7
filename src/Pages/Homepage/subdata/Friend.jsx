import React from "react";
import { Link, useNavigate } from "react-router";

const statusStyles = {
  "overdue": "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-600",
};

const tagColors = [
  "bg-green-100 text-green-700",
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
];

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  return (
    <Link to={`/friend/${friend.id}`}
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center cursor-pointer"
    >
      {/* Picture */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full mx-auto object-cover"
      />

      {/* Name */}
      <h2 className="mt-3 font-semibold text-gray-800">
        {friend.name}
      </h2>

      {/* Days */}
      <p className="text-sm text-gray-400 mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className={`text-xs px-2 py-1 rounded-full ${
              tagColors[i % tagColors.length]
            }`}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            statusStyles[friend.status]
          }`}
        >
          {friend.status === "almost due"
            ? "Almost Due"
            : friend.status === "on-track"
            ? "On-Track"
            : "Overdue"}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
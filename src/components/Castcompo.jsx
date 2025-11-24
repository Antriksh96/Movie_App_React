import React from "react";

const CastCard = ({ img, name, character }) => {
    const imageUrl = img
        ? `https://image.tmdb.org/t/p/w500${img}`
        : "https://via.placeholder.com/150?text=No+Image";

    return (

        <div className="flex flex-col items-center text-center min-w-[130px] scrollbar-hide">

            {/* Circle Container with Padding */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#1c1f26] border border-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <p className="font-semibold text-white text-sm md:text-base mt-3 leading-tight">
                {name}
            </p>

            {/* Character */}
            <p className="text-gray-400 text-xs md:text-sm leading-tight">
                {character}
            </p>
        </div>
    );
};

export default CastCard;

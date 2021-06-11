import React from 'react';

const ImageCard = ({ image }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.strMealThumb} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-red-500 text-xl mb-2">
                    {image.strMeal}
                </div>
                <ul>
                    <li>
                        <strong>Category: </strong>
                        {image.strCategory}
                    </li>
                    <li>
                        <strong>Tags: </strong>
                        {image.strTags}
                    </li>
                    <li>
                        <strong>Area: </strong>
                        {image.strArea}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ImageCard;
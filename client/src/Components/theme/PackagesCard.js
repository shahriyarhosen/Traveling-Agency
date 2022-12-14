import React from "react";

const PackagesCard = ({
  img,
  offers,
  title,
  location,
  des,
  price,
  ratting,
  hotel,
}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className=" relative w-full overflow-hidden">
        <img
          className="w-full min-w-[480px] min-h-[260px] max-h-[260px] hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
          src={img}
          alt="Package"
        />
      </figure>
      <div className="card-body text-start relative">
        <span className="absolute -top-7 right-5 btn text-white btn-primary -mb-5 z-10">
          {offers}
        </span>
        <h2 className="text-primary text-lg  font-serif font-semibold ">
          {location}
        </h2>
        <h1 className="text-2xl font-serif font-semibold hover:text-primary">
          {title}
        </h1>
        <span className="flex justify-start items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary "
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              defaultChecked
            />
          </div>
          <span className="px-1">({ratting})</span>
        </span>
        <p className="text-base py-2">{des}</p>
        <div className="card-actions justify-start border-t pt-3">
          <div className="flex justify-center items-center gap-2">
            <span className="text-primary text-xl font-bold">${price}</span>

            <span className="text-lg text-gray-500 font-semibold">
              {" "}
              | Per {hotel ? "Day" : "Person"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;

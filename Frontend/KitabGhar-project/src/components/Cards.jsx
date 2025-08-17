import React from "react";

function Cards({ item }) {
  console.log(item);
  console.log("image", item.image);
  // Assuming items is an array of objects with properties like id, title, image, etc
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-200">
          <figure>
            <img className="" src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline py-1 px-2">$ {item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

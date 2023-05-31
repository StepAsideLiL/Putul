import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import useDynamicTitle from "../utils/useDynamicTitle";

const ToyDetail = () => {
  const figure = useLoaderData();
  const {
    toyName,
    picture,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = figure;

  useDynamicTitle(`Putul - ${toyName} Details`);

  return (
    <div className="my-10 grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <img src={picture} alt={`Picture of ${toyName}`} className="h-full" />
      </div>

      <div className="col-span-2 space-y-3">
        <h1 className="text-3xl font-bold">{toyName}</h1>

        <p>
          Seller Name: <span className="font-bold">{sellerName}</span>
        </p>
        <p>
          Seller Email: <span className="font-bold">{sellerEmail}</span>
        </p>

        <p>
          price: <span className="font-bold">${price}</span>
        </p>
        <div className="flex items-center gap-2">
          <span>Rating: </span>
          <span>
            <Rating readOnly value={rating} style={{ maxWidth: 80 }} />
          </span>
          <span className="font-bold">{rating}</span>
        </div>

        <p>
          Available: <span className="font-bold">{availableQuantity}</span>
        </p>

        <div>
          <h4 className="text-xl font-bold">Description</h4>
          <p>{detailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetail;

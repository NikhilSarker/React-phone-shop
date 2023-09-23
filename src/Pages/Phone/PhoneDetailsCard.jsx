import PropTypes from "prop-types";
const PhoneDetailsCard = ({ phone }) => {
  const {  image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          
          <h4 className="mb-2  font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <h4 className="mb-2  font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Price: ${price}
          </h4>
          <h4 className="mb-2  font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {rating}
          </h4>
         
          
          <a className="inline-block" href="#">
            <button
              className="flex btn btn-accent select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to favorite
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
PhoneDetailsCard.propTypes = {
  phone: PropTypes.object.isRequired,
};
export default PhoneDetailsCard;

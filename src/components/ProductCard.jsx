function ProductCard({ image, title, description }) {
  return (
    <>
      <div className="flex-none max-w-[379px] h-[450px] mr-8 bg-white-100 rounded-[65px]">
        <div className="flex h-[219px]">
          <img
            src={image}
            alt="product"
            className="h-full w-full object-cover rounded-tl-[65px] rounded-tr-[65px]"
          />
        </div>
        <div className="flex flex-col gap-[29px] justify-center items-center">
          <h3 className="text-[24px] font-[700] text-black-500">{title}</h3>
          <p className="text-[16px] text-center font-[400] text-black-500">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

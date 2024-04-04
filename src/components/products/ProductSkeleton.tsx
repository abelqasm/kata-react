const ProductSkeleton = () => {
  return (
    <div className="card bg-[#9bb0c1] flex gap-2 p-3 w-64 animate-pulse">
      <div className="card-body h-10 bg-gray-200"></div>
      <figure className="h-48 bg-gray-200"></figure>
      <span className="h-4 bg-gray-200"></span>
      <div className="card-actions justify-center p-2 w-full bg-gray-200">
        <button className="btn bg-[#51829b] border-none w-full"></button>
      </div>
    </div>
  );
};

export default ProductSkeleton;

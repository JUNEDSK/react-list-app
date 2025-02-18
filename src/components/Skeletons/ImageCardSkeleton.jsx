import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ImageCardSkeleton = () => {
  return (
    <div className="w-full bg-white p-5 rounded-lg border border-gray-400 shadow-lg animate-pulse">
      <div>
        <Skeleton  className="p-10 h-60 mb-4" />
      </div>
      <Skeleton count={6} className="mt-5" />
    </div>
  );
}

export default ImageCardSkeleton;

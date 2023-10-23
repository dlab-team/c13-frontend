export default function SkeletonLoader ({loaderColor})  {
    return (
        <div className="text-center">
            <div className={`spinner-border ${loaderColor}`} role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

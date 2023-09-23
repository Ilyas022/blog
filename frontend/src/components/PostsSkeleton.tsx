const PostsSkeleton: React.FC = (): JSX.Element => {
  return (
    <div className="relative bg-white border-transparent border-2 border-solid hover:border-main transition duration-150">
      <div className="flex items-center justify-center w-full h-80 mb-5 rounded bg-gray-300 animate-pulse">
        <svg
          className="w-10 h-10 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex gap-6 p-5">
        <svg
          className="w-8 h-8 text-gray-400 animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
        <div className="grow">
          <div className="h-2 w-40 bg-gray-300 rounded-full animate-pulse mb-2"></div>
          <div className="h-1 w-24 bg-gray-300 rounded-full mb-2 animate-pulse"></div>
          <div className="h-3 w-1/2 rounded-full bg-gray-300 animate-pulse mb-5"></div>
          <div className="flex gap-3 mb-4">
            <button className="h-1 w-10 bg-gray-300 animate-pulse rounded-full"></button>
            <button className="h-1 w-10 bg-gray-300 animate-pulse rounded-full"></button>
            <button className="h-1 w-10 bg-gray-300 animate-pulse rounded-full"></button>
          </div>
          <div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 opacity-50">
                <span>
                  <svg
                    className="w-4 h-4 text-gray-400 animate-pulse"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </span>
                <span className="w-4 h-2 bg-gray-400 animate-pulse rounded-full"></span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <span>
                  <svg
                    className="w-4 h-4 text-gray-400 animate-pulse"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </span>
                <span className="w-4 h-2 bg-gray-400 animate-pulse rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsSkeleton

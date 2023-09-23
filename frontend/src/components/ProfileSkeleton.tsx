const UserSkeleton: React.FC = (): JSX.Element => {
  return (
    <div className="relative border-transparent border-2 border-solid transition duration-150">
      <div className="flex gap-16 mb-10 p-8 bg-white">
        <div className="flex items-center justify-center h-40 w-40 rounded-full mb-5 bg-gray-300 animate-pulse">
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
        <div className="grow">
          <div className="h-8 w-80 bg-gray-300 rounded-full animate-pulse mb-3"></div>
          <div className="h-4 w-40 bg-gray-300 rounded-full animate-pulse mb-6"></div>
          <div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
            <div className="h-2 w-11/12 bg-gray-300 rounded-full animate-pulse mb-1"></div>
          </div>
        </div>
      </div>
      {/* Posts */}
      <div className="p-8 bg-white">
        <div className="h-4 w-40 bg-gray-300 rounded-full animate-pulse mb-6"></div>
        <div className="grid grid-cols-3 gap-4">
          {/* Post */}
          <div className="p-5 rounded border border-solid border-gray-200">
            <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 animate-pulse">
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
            <div className="h-4 w-3/4 bg-gray-300 rounded-full animate-pulse mb-6"></div>
            <div className="h-2 w-1/4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
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
          <div className="p-5 rounded border border-solid border-gray-200">
            <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 animate-pulse">
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
            <div className="h-4 w-3/4 bg-gray-300 rounded-full animate-pulse mb-6"></div>
            <div className="h-2 w-1/4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
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
          <div className="p-5 rounded border border-solid border-gray-200">
            <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 animate-pulse">
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
            <div className="h-4 w-3/4 bg-gray-300 rounded-full animate-pulse mb-6"></div>
            <div className="h-2 w-1/4 bg-gray-300 rounded-full animate-pulse mb-4"></div>
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

export default UserSkeleton

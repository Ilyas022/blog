interface ITags {
  tags: string[]
}
const Tags: React.FC<ITags> = ({ tags }): JSX.Element => {
  const tagsFailed = status === 'failed'

  return (
    <div className="p-5 bg-white rounded-md">
      <h3 className="mb-4 text-xl font-medium tracking-wide">Tags</h3>
      {tagsFailed ? (
        <div>Something went wrong with tags</div>
      ) : (
        <div className="flex flex-col gap-4">
          {tags.length
            ? tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>

                  <span>{tag}</span>
                </div>
              ))
            : 'Нет тегов'}
        </div>
      )}
    </div>
  )
}

export default Tags

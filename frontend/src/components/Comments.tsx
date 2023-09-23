import { IComment } from '../models/posts'

interface IComments {
  comments: IComment[]
}

const Comments: React.FC<IComments> = ({ comments }: IComments): JSX.Element => {
  if (!comments.length) {
    return (
      <div className="p-5 bg-white rounded-md">
        <h3 className="mb-4 text-xl font-medium tracking-wide">Comments</h3>
        <div>There are no comments</div>
      </div>
    )
  }

  return (
    <div className="p-5 bg-white rounded-md">
      <h3 className="mb-4 text-xl font-medium tracking-wide">Comments</h3>
      <div className="flex flex-col gap-5">
        {comments.map((comment, key) => {
          return (
            <div key={key} className="flex gap-3">
              <img
                src={
                  comment.author.avatarImg
                    ? comment.author.avatarImg
                    : 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                }
                alt="user image"
                className="mt-1 h-8 w-8 rounded-full object-cover"
              />
              <div>
                <div className="text-base">{comment.author.fullName}</div>
                <div className="text-sm opacity-60 tracking-wide">{comment.text}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comments

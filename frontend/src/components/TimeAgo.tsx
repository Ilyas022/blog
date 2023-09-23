import { formatDistanceToNow, parseISO } from 'date-fns'

interface ITimeAgo {
  timestamp: string
}

const TimeAgo: React.FC<ITimeAgo> = ({ timestamp }: ITimeAgo): JSX.Element => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return <div className="text-xs opacity-60 text-black/80 tracking-normal mb-1">{timeAgo}</div>
}

export default TimeAgo

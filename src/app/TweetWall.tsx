import { Tweet } from "react-tweet";

export const TweetWall = () => {
  return (
    <div className="flex justify-center gap-x-6">
      <div className="flex flex-col flex-wrap content-center">
        <Tweet id="1396922209067753473" apiUrl="https://i-hate-semicolons.vercel.app/api/tweet/1396922209067753473" />
        <Tweet id="1017710433111822336" apiUrl="https://i-hate-semicolons.vercel.app/api/tweet/1017710433111822336" />
      </div>

      <div className="flex flex-col flex-wrap content-center">
        <Tweet id="1441524053659947013" apiUrl="https://i-hate-semicolons.vercel.app/api/tweet/1441524053659947013" />
        <Tweet id="1591055229348614146" apiUrl="https://i-hate-semicolons.vercel.app/api/tweet/1591055229348614146" />
      </div>

      <div className="flex flex-col flex-wrap content-center">
        <Tweet id="1220783479333490690" apiUrl="https://i-hate-semicolons.vercel.app/api/tweet/1220783479333490690" />
        <Tweet id="1685811548453781505" apiUrl="https://i-hate-semicolons.vercel.app/api/tweet/1685811548453781505" />
      </div>
    </div>
  )
}

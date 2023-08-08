import { Tweet } from "react-tweet";

export const TweetWall = () => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <Tweet id="1628832338187636740" apiUrl="http://localhost:3001/api/tweet/1628832338187636740" />
      <Tweet id="1628832338187636740" apiUrl="http://localhost:3001/api/tweet/1628832338187636740" />
      <Tweet id="1628832338187636740" apiUrl="http://localhost:3001/api/tweet/1628832338187636740" />
      <Tweet id="1628832338187636740" apiUrl="http://localhost:3001/api/tweet/1628832338187636740" />
    </div>
  )
}
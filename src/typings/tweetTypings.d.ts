export as namespace ITweet;

export interface Tweet {
  user: string;
  content: string;
  likes: number;
  replies: number;
  retweet: number;
}

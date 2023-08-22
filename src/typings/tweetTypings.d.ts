export as namespace ITweet;

export interface Tweet {
  _id: string;
  user: string;
  content: string;
  likes: number;
  replies: number;
  retweet: number;
  createdAt: Date;
}

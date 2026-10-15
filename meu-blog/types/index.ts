export interface PostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

interface CrawlerResponseType{
  head: string,
  date: string,
  context: string,
  href: string,
  headline: string,
  tags: string[]
}

interface ItemViewPropsType {
  postList: CrawlerResponseType[];
}

export type {CrawlerResponseType, ItemViewPropsType}
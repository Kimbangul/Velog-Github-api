interface OptionType{
  limit: number;
  thumb: boolean;
}
interface CrawlerResponseType extends OptionType{
  head: string,
  date: string,
  context: string,
  href: string,
  headline: string,
  tags: string[]
}

interface ItemViewPropsType extends OptionType {
  postList: CrawlerResponseType[];
}

export type {CrawlerResponseType, ItemViewPropsType}
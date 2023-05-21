'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CrawlerResponseType } from '@/components/item/ItemType';
import { PostItem } from '@/components/item/ItemStyle';

const PostItemView : React.FC<CrawlerResponseType> = ({head, headline, date,context,href,tags, limit, thumb}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_POST_BASE_URL;
  
  return(
    <PostItem.Item>
      <Link href={`${BASE_URL}${href}`} target='_blank'>
        {
          head && thumb &&
          <PostItem.Image.Container>
            <Image src={head} alt='' fill sizes='180px' priority/>
          </PostItem.Image.Container>
        }
       <PostItem.Text.Container>
       <PostItem.Text.Title>{headline}</PostItem.Text.Title>
        <PostItem.Text.Desc>{context}</PostItem.Text.Desc>
        {
          tags.length > 0 &&
          <PostItem.Tag.List>
            {
              tags.map((el, idx) => {
                if (idx > 2) return;
                return(
                  <PostItem.Tag.Item key={`${el}${idx}`}>{el}</PostItem.Tag.Item>
                )
              })
            }
          </PostItem.Tag.List>
        }
        <PostItem.Text.Date>{date}</PostItem.Text.Date>
       </PostItem.Text.Container>
      </Link>
    </PostItem.Item>
  )
}

export default PostItemView;
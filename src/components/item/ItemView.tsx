'use client';

import Image from 'next/image';
import Link from 'next/link';
import Item from '@/components/item/ItemStyle';
import { ItemViewPropsType, CrawlerResponseType } from '@/components/item/ItemType';

const ItemView : React.FC<ItemViewPropsType> = ({postList}) => {
  return(
    <Item.Container>
     {
      postList.map((el, idx) => {
        if (el.href === undefined) return;
        return(
          <PostItem {...el} key={`post${idx}`}/>
        )
      })
     }
    </Item.Container>
  )
}

const PostItem : React.FC<CrawlerResponseType> = ({head, headline, date,context,href,tags}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_POST_BASE_URL;
  
  return(
    <li>
      <Link href={`${BASE_URL}${href}`} target='_blank'>
        {
          head &&
          <div>
            <Image src={head} alt='' width={768} height={402}/>
          </div>
        }
        <h2>{headline}</h2>
        <p>{context}</p>
        <span>{date}</span>
        {
          tags.length > 0 &&
          <ul>
            {
              tags.map((el, idx) => {
                return(
                  <li key={`${el}${idx}`}>{el}</li>
                )
              })
            }
          </ul>
        }
      </Link>
    </li>
  )
}

export default ItemView;
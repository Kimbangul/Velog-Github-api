'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CrawlerResponseType } from '@/components/item/ItemType';

const PostItemView : React.FC<CrawlerResponseType> = ({head, headline, date,context,href,tags}) => {
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

export default PostItemView;
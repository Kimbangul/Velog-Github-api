'use client';

import {Item} from '@/components/item/ItemStyle';
import { ItemViewPropsType} from '@/components/item/ItemType';
import PostItemView from '@/components/item/PostItemView';

const ItemView : React.FC<ItemViewPropsType> = ({postList, limit, thumb, viewRef}) => {
  return(
    <Item.Container id="view" ref={viewRef}>
     {
      postList.map((el, idx) => {
        if (el.href === undefined) return;
        if (limit !== 0  && limit < idx) return;
        return(
          <PostItemView {...el} limit={limit} thumb={thumb} key={`post${idx}`}/>
        )
      })
     }
    </Item.Container>
  )
}



export default ItemView;
'use client';

import {Item} from '@/components/item/ItemStyle';
import { ItemViewPropsType} from '@/components/item/ItemType';
import PostItemView from '@/components/item/PostItemView';

const ItemView : React.FC<ItemViewPropsType> = ({postList}) => {
  return(
    <Item.Container>
     {
      postList.map((el, idx) => {
        if (el.href === undefined) return;
        return(
          <PostItemView {...el} key={`post${idx}`}/>
        )
      })
     }
    </Item.Container>
  )
}



export default ItemView;
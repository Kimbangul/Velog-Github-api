'use client';

import { useEffect, useState } from "react";
import {useSearchParams } from "next/navigation";
import client from "@/axios/client";
import ItemView from "@/components/item/ItemView";

const ItemContainer = () => {
  const params = useSearchParams();

  // PARAM state
  const [postList, setPostList] = useState([]);
  const [limit, setLimit] = useState(0);
  const [thumb, setThumb] = useState(false);

  // FUNCTION get cralwer data
  const getCralwerData = async () => {
    const id = params.get('id');

    const data = await client.get(`/?id=${id}`);
    setPostList(JSON.parse(data.data));


    return;
  }

  useEffect(()=>{ 
    const limitParam = params.get('limit');
    const thumbParam = params.get('thumb');

    getCralwerData();

    // NOTE limit parmeter 있을 때
    if (limitParam !== null){
      const limit = Number(limitParam);
      setLimit(limit);
    }

    // NOTE thumb parameter 있을 때
    if (thumbParam !== null){
      const thumb = thumbParam === 'true' ? true : false;
      setThumb(thumb);
    }
  }, []);
  
  return(
    <>
      <ItemView postList={postList} limit={limit} thumb={thumb}/>
    </>
  )
}

export default ItemContainer;
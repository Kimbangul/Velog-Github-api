'use client';

import { useEffect, useState } from "react";
import {useSearchParams } from "next/navigation";
import client from "@/axios/client";
import ItemView from "@/components/item/ItemView";

const ItemContainer = () => {
  const params = useSearchParams();

  // PARAM state
  const [postList, setPostList] = useState([]);

  // FUNCTION get cralwer data
  const getCralwerData = async () => {
    const id = params.get('id');

    const data = await client.get(`/?id=${id}`);
    setPostList(JSON.parse(data.data));

    return;
  }

  useEffect(()=>{ 
    getCralwerData();
  }, []);
  
  return(
    <>
      <ItemView postList={postList}/>
    </>
  )
}

export default ItemContainer;
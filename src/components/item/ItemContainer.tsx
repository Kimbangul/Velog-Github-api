'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import client from "@/axios/client";
import ItemView from "@/components/item/ItemView";
import { CrawlerResponseType } from "./ItemType";
import { AxiosResponse } from "axios";

const ItemContainer = () => {
  const router = useRouter();
  const params = useSearchParams();
  const params2 = useParams();
  const pathName = usePathname();

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
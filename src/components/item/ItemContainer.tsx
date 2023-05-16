'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import client from "@/axios/client";
import ItemView from "@/components/item/ItemView";

const ItemContainer = () => {
  const router = useRouter();

  useEffect(()=>{ 
    //const data = client.get('/?url=https://velog.io/@kimbangul');
    //console.log(data);
    console.log(router.query);
  }, []);
  
  return(
    <>
      <ItemView />
    </>
  )
}

export default ItemContainer;
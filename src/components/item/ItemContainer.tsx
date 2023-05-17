'use client';

import { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import client from "@/axios/client";
import ItemView from "@/components/item/ItemView";

const ItemContainer = () => {
  const router = useRouter();
  const params = useSearchParams();
  const params2 = useParams();
  const pathName = usePathname();
  console.log(process.env.NEXT_PUBLIC_API_URL);

  // FUNCTION get cralwer data
  const getCralwerData = async () => {
    const id = params.get('id');
    console.log(id);

    const data =  await client.get(`/?id=${id}`);

    console.log(data);
    return data;
  }

  useEffect(()=>{ 
    getCralwerData();
  }, []);
  
  return(
    <>
      <ItemView />
    </>
  )
}

export default ItemContainer;
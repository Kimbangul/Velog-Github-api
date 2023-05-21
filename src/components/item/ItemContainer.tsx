'use client';

import { useEffect, useState, useRef } from "react";
import {useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import { toSvg } from 'html-to-image';
import client from "@/axios/client";
import ItemView from "@/components/item/ItemView";

const ItemContainer = () => {
  const params = useSearchParams();
  const viewRef = useRef(null);

  // PARAM state
  const [postList, setPostList] = useState([]);
  const [imgData, setImgData] = useState('');
  const [limit, setLimit] = useState(0);
  const [thumb, setThumb] = useState(false);

  // FUNCTION get cralwer data
  const getCralwerData = async () => {
    const id = params.get('id');

    const data = await client.get(`/?id=${id}`);
    setPostList(JSON.parse(data.data));
  }

  // FUNCTION html to image
  const getImgData = async () => {
    let imgData;
		const view = document.getElementById('view');
    if (!(view instanceof HTMLUListElement)) return;

		return html2canvas(view).then(async canvas=>{
			imgData = await canvas.toDataURL('image/png');
      setImgData(imgData);
		}).catch((e)=>{
      console.log(e);
    })
	};

  // FUNCTION html to image
  const getImg = () => {
    if (!(viewRef?.current)) return;

    toSvg(viewRef.current).then((dataUrl)=>{
      const img = new Image();
      img.src = dataUrl;
      console.log(dataUrl);
    }).catch((e)=>{
      console.log(e);
    });
    console.log('end');
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

  useEffect(()=>{
    if (postList.length === 0) return;
   // getImgData();
    getImg();
  }, [postList]);

  useEffect(()=>{
    if (imgData === '') return;
    console.log(imgData);
    window.open(imgData, '_blank');
  }, [imgData])
  
  return(
    <>
      <ItemView postList={postList} limit={limit} thumb={thumb} viewRef={viewRef}/>
    </>
  )
}

export default ItemContainer;
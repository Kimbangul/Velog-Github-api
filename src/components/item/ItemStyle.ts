import styled from "styled-components";

export const Item = {
  Container: styled.ul`
  width: 480px;
  `,
}

export const PostItem = {
  Item: styled.li`
    box-shadow: 0 0 1.4rem rgba(0,0,0,0.08);
    border: 0.1rem solid #eee;
    border-radius: 1.6rem;
    margin-top: 1.2rem;
    &:first-child{
      margin-top: 0;
    }
    & > a{
      padding: 2.4rem;
      height: 17.9rem;
      display: flex;
      gap: 1.6rem;
    }
  `,
  Image: {
    Container: styled.div`
      width: 18rem;
      position: relative;
      flex-shrink: 0;
      & img{
        object-fit: cover;
        object-position: center;
        height: 100% !important;
      }
    `,
  },
  Text: {
    Container: styled.div`
      color: #222;
      flex-grow: 1;
    `,
    Title: styled.h2`
      font-size: 1.4rem;
      font-weight: 600;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    `,
    Desc: styled.p`
      font-size: 1.2rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-top: 1.2rem;
      line-height: 1.5;
      color:#444;
    `,
    Date: styled.span`
      font-size: 1.1rem;
      display: block;
      text-align: end;
      margin-top: 0.8rem;
      color: #666;
    `,
  },
  Tag:{
    List: styled.ul`
      display: flex;
      gap: 0.4rem;
      margin-top: 1.4rem;
    `,
    Item: styled.li`
      font-size: 1.1rem;
      padding: 0.4rem 0.6rem;
      border-radius: 10rem;
      background: #F8F9FA;
      color: #12B886;
    `,
  }
}

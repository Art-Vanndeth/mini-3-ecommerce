import CardProductDetail from '@/components/card/CardProductDetail';
import next from 'next';
import React from 'react'

// config parameters
type PropsParams = {
  params: {
    id: number,
  },
  searchParams: any,
}

// create function getData from api
const END_POINT = `${"https://fakestoreapi.com/products/"}`;
export const getData = async (id: number) => {
  // Fetching data with caching base on time
  const res = await fetch(`${END_POINT}${id}`, {next: {revalidate: 3600}}); 
  const data = await res.json();
  return data;
}

export default async function Detail(props: PropsParams) {

  // call function getData
  const data = await getData(props.params.id);
  return (
    <div className='h-screen grid place-content-center'>
      <CardProductDetail 
        title={data.title}
        description={data.description}
        image={data.image}
      />
    </div>
  )
}

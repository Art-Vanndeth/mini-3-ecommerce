"use client"
import CardProduct from '@/components/card/CardProduct';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const END_POINT = `${"https://fakestoreapi.com/products/"}`;

export default function Shop() {
  const [products, setProducts] = useState([]);
  const router = useRouter()

  useEffect(() => {
    fetch(END_POINT)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <main className="flex-1">
			<h1 className="mx-24 text-4xl font-semibold">Popular Products</h1>
			<section className="mt-6 container mx-auto grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-6 md:grid-cols-5">
			{products.map((product: any, index) => (
				<CardProduct
					key={index}
					name={product.title}
					image={product.image}
					price={product.price}
					onClick={() => router.push(`/shop/${product.id}`)}
				/>
			))}
			</section>
		</main>
  )
}

export type ProductType={
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    category: {name:any};
    seller: string;
    quantity:number;
}
export type ProductRespone={
    name:string,
    image:string,
    desc:string,
    price:number,
    onClick?:()=>void
}
export type ProductDetailType={
    params:{
        id:number
    },
    searchParams: { [key: string]: string | string[] | undefined }
}


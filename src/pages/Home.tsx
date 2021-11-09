import React, { useState, useEffect, createRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useTransition, animated } from '@react-spring/web'
import Product from "components/app/Product";
import { IProduct } from "models/interfaces";
import { CRow, CCol, CSpinner, CContainer } from "@coreui/react";
import SearchBar from "components/app/SearchBar";
import { actionCreator, ActionTypes } from "utils/actions";
import styles from "./styles.module.scss";
import Animator from "components/Animator";

const Home: React.FC = () => {
  const ProductList = useSelector((state: any) => state.app_store.products);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([...ProductList]);
  const dispatch = useDispatch();


  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }
  const toggleLoading = (val: boolean) => {
    setIsLoading(val);
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const filteredProducts = ProductList.filter((product: IProduct) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm == "";
      });
      setProducts([...filteredProducts]);
      setIsLoading(false)
    }, 1000);

  }, [searchTerm, ProductList]);

  return <>
    <SearchBar {...{
      searchTerm,
      handleChange: onSearch,
    }} />
    <CContainer fluid>
      <CRow className="justify-content-center my-4">
        <CCol className="text-center">
          <div style={{ height: '20px' }}>
            {
              isLoading && <CSpinner color="primary" />
            }
          </div>
        </CCol>
      </CRow>
    </CContainer>

    <CRow className=" justify-content-md-center bubbles-group"   >
      <Animator>
        {
          products.sort((a: any, b: any) => {
            return b.isFavorite - a.isFavorite
          }).map((product: IProduct) => {
            return <Product product={product} key={product.id} ref={createRef()} />
          })
        }
      </Animator>
    </CRow>
  </>;
};

export default Home;

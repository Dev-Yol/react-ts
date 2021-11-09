import React, { forwardRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CCard, CCardImage, CCardBody, CButton, CCardTitle, CCol } from "@coreui/react";
import { IProduct } from "models/interfaces";
import { actionCreator, ActionTypes } from 'utils/actions';


const Product = forwardRef(({ product }: { product: IProduct }, ref: React.Ref<HTMLDivElement>) => {
    const {
        id,
        name,
        price,
        image,
        inStock,
        isFavorite
    } = product
    const navigate = useNavigate();
    const isInCart = useSelector((state: any) => state.app_store.cart.find((item: IProduct) => item.id === id));
    const dispatch = useDispatch()
    const handleClick = (action: string): void => {
        let payload: any = id;
        if (action == ActionTypes.ADD_TO_CART) {
            payload = product;
        }
        dispatch(actionCreator(action, payload));
    };

    const viewDetails = (): void => {
        navigate(`/product-details/${id}`)
    }

    return (
        <CCol ref={ref} key={product.id} xs={12} sm={6} md={4} xl={4} className="mb-4 p-3 d-flex justify-content-center product-card">
            <CCard className="rounded-0 text-center box-shadow border-0 hoverable hover-on-zoom-in content" style={{ width: '25rem' }}>
                <div className="content-overlay"></div>
                <CCardImage className="px-5 mt-3  " orientation="top" {
                    ...{
                        src: image,
                    }
                } />
                <CCardBody className="px-4 ">

                    <CCardTitle style={{
                        fontWeight: 'normal'
                    }} className="font-weight-light" >
                        <p>
                            {name.toLocaleUpperCase()}
                        </p>
                    </CCardTitle>

                    <small>
                        <p> Test description</p>
                    </small>
                    <p className="h5 text-primary"><strong>${price}</strong></p>


                </CCardBody>
                <div className="content-details fadeIn-bottom">
                    <div className="d-grid gap-2 mt-3">
                        <CButton shape="rounded-0" className="py-3" onClick={viewDetails}>{"View"}</CButton>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <CButton shape="rounded-0" className="py-3" disabled={!inStock} onClick={() => handleClick(ActionTypes.ADD_TO_CART)}>{!inStock ? "Out of Stock" : `Add${isInCart ? 'ed' : ''} To Cart`}</CButton>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <CButton shape="rounded-0" className="py-3" onClick={() => {
                            handleClick(isFavorite ? ActionTypes.REMOVE_FROM_FAVORITES : ActionTypes.ADD_TO_FAVORITES)
                        }}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</CButton>
                    </div>
                    {/* <h3 className="content-title">View</h3> */}
                </div>
                {/* <CCardFooter className="text-center bg-primary text-white">
            </CCardFooter> */}
            </CCard>
        </CCol>
    )
});





export default Product;
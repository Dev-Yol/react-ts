import React from "react";
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CImage,
} from "@coreui/react";
import {
    cilBell,
    cilCreditCard,
    cilCommentSquare,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilTask,
    cilUser,
    cilCart,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { AppStoreState, IProduct } from "models/interfaces";
import { useSelector } from "react-redux";

const AppCartDropdown = () => {
    const cartItems = useSelector(({ app_store }: { app_store: AppStoreState }) => app_store.cart)

    return (
        <CDropdown variant="nav-item" >
            <CDropdownToggle className="py-0" caret={false}>
                <CIcon icon={cilCart} style={{ color: "white" }} size="xl" />
                <CBadge color="danger" shape="rounded-pill">
                    {cartItems.length}
                </CBadge>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">
                    My Cart
                </CDropdownHeader>
                {
                    cartItems.length ?
                        cartItems.map((cartItem: IProduct) => {
                            return <CDropdownItem href="#">
                                {cartItem.name}
                            </CDropdownItem>
                        }) :
                        <CDropdownItem href="#">
                            NO ITEMS IN CART
                        </CDropdownItem>
                }
                {cartItems.length && <>
                    <CDropdownDivider />
                    <CDropdownItem href="#">
                        Go To Cart
                    </CDropdownItem>
                </>}

            </CDropdownMenu>
        </CDropdown>
    );
};

export default AppCartDropdown;

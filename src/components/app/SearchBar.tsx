import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CFormInput, CInputGroup, CInputGroupText } from "@coreui/react";
import React from "react";
const SearchBar = ({ searchTerm, handleChange }: 
    { searchTerm: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void } ) => {
    return (
        <CContainer className=" pt-5 mt-5">
                <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">
                    <CIcon icon={cilSearch} size="lg" />
                    </CInputGroupText>
                    <CFormInput
                        size="lg"
                        value={searchTerm}
                        onChange={handleChange}
                        type="text"
                        id="search"
                        placeholder="Seach..." />
                </CInputGroup>
        </CContainer >
    )
}
export default SearchBar;
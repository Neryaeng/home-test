import React, { useEffect, useState } from "react";
import { Title, Image, ImagesGrid } from "../../general/styles/general.styled";
import { getConstants } from "../../utils/consts";
import { Container, SearchInput, SearchButton, SearchDiv, Footer } from "./ImagesPage.styled";
import PaginationObj from "../inner-components/PaginationObj";
import { getImages } from "../../general/logic/general.logic";

const ImagesPage = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [earthDate, setEarthDate] = useState('');
    const [photosData, setPhotosData] = useState(null);
    const consts = getConstants().IMAGES_BY_DATE;
    const pageTitle = consts?.title;
    const imagesPerPage = consts?.imagesPerPage;

    const filteredImages = photosData?.filter((image) =>
        image?.img_src?.toLowerCase().includes(searchText?.toLowerCase())
    );

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = filteredImages?.slice(indexOfFirstImage, indexOfLastImage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleClick = async () => {
        const data = await getImages(earthDate);
        // const data = dummyImages;
        setPhotosData(data);
    };

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <SearchDiv>
                <SearchInput
                    value={earthDate}
                    onChange={(e) => setEarthDate(e.target.value)}
                />
                <SearchButton onClick={handleClick}>Search</SearchButton>
            </SearchDiv>
            {photosData && (

                <ImagesGrid>
                    {currentImages.map((image, index) => (
                        <Image key={image.id} img={image} index={index} />
                    ))}
                </ImagesGrid>
            )}

            <Footer style={{ marginTop: 'auto' }}>

                <PaginationObj
                    filteredImages={filteredImages}
                    imagesPerPage={imagesPerPage}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </Footer>

        </Container>
    );
}; export default ImagesPage;
import React, { useState } from "react";
import { Title, } from "../../general/styles/general.styled";
import { getConstants } from "../../utils/consts";
import { getDummyWeather, getWeather } from "./WeatherPage.logic";
import { Category, Container, Footer, Row, WeatherDiv, WeatherGrid } from "./WeatherPage.styled";
import PaginationObj from "../inner-components/PaginationObj";
import { elementsColors } from "../../utils/consts";
function WeatherPage() {
    const data = getDummyWeather();// I use this function that takes Data from a dummy object because as of 5/20/2023 no values have been returned for this service
    const [sortBy, setSortBy] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const selectInput = elementsColors.selectInput;
    const consts = getConstants()?.MARS_WEATHER;
    const pageTitle = consts?.title;
    const paramNames = consts?.parametersNames;
    const elementsPerPage = consts?.imagesPerPage;

    const sortDivs = (param) => {
        const sortedData = [...data];
        sortedData.sort((a, b) => {
            let avgValTerm = paramNames[param];
            if (param === 'First_UTC' || param === 'Last_UTC') {
                return new Date(b) - new Date(a);
            } else {
                return b?.avgTemp - a?.avgTemp;
            }
        });
        return sortedData;
    };


    const handleSortChange = (event) => {
        const selectedParam = event.target.value;
        setSortBy(selectedParam);
    };

    let sortedDivs = data;

    if (sortBy) {
        sortedDivs = sortDivs(sortBy);
    }
    const indexOfLastImage = currentPage * elementsPerPage;
    const indexOfFirstImage = indexOfLastImage - elementsPerPage;
    const slicedDivs = sortedDivs.slice(indexOfFirstImage, indexOfLastImage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <div style={{ display: 'flex', justifyContent: 'end', flexWrap: 'wrap', marginRight: '26%' }}>
                <label style={{ fontWeight: '600', marginInline: '0.1%' }} htmlFor="sortSelectBox">Sort By:</label>
                <select style={{
                    color: selectInput?.color,
                    background: selectInput?.background,
                    border: `1px solid ${selectInput?.border}`,
                    borderRadius: '5px',
                    paddingInline: '0.5%'
                }} id="sortSelectBox" value={sortBy} onChange={handleSortChange}>
                    <option value="">-- Select --</option>
                    <option value="AT">Temprature</option>
                    <option value="HWS">Wind</option>
                    <option value="PRE">Pressure</option>
                    <option value="First_UTC">First UTC</option>
                    <option value="Last_UTC">Last UTC</option>
                </select>
            </div>
            <WeatherGrid>
                {slicedDivs.map((obj, index) => (
                    <WeatherDiv key={index}>
                        <Row> <Category value={'Data Point:'} />  {obj?.dataPoint}</Row>
                        <Row><Category value={'Temperature:'} /> {obj?.avgTemp}</Row>
                        <Row><Category value={'Wind Speed:'} /> {obj?.avgWind}</Row>
                        <Row><Category value={'Pressure:'} /> {obj?.avgPress}</Row>
                        <Row><Category value={'First UTC:'} /> {obj?.firstUTC}</Row>
                        <Row><Category value={' Last UTC:'} /> {obj?.lastUTC}</Row>
                    </WeatherDiv>
                ))}
            </WeatherGrid>
                 <Footer  >
                    <PaginationObj
                        filteredImages={sortedDivs} // Use `sortedDivs` instead of `slicedDivs`
                        imagesPerPage={elementsPerPage}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                    <div >
                        <Row>   AT - Atmospheric temperature sensor  </Row>
                        <Row>  HWS - Horizontal wind speed sensor</Row>
                        <Row>  PRE - Atmospheric pressure sensor  </Row>
                    </div>
                </Footer>

         </Container >
    );
}

export default WeatherPage;

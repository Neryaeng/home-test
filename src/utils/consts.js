

const colors = {
    lightBlack: '#262626',
    white: '#ffffff',
    beige: '#ded6c9',
    brown: '#8d6338',
    lightBrown: '#b19168',
}

export const elementsColors = {
    titleColor: colors.lightBlack,
    buttonColor: colors.beige,
    pagniate: {
        defaultBG: colors.white,
        clickedBG: colors.brown,
        border: colors.beige,
        color: colors.lightBlack,
    },
    searchInput: {
        background: colors.white,
        border: colors.beige,
        color: colors.lightBlack,
    },
    searchButton: {
        background: colors.beige,
        border: colors.beige,
        color: colors.lightBlack,
    },
    selectInput: {
        background: colors.white,
        border: colors.beige,
        color: colors.lightBlack,
    },
    carouselButton: {
        background: colors.white, 
        color: colors.brown,
    },

}


const constants = {
    ABOUT: {
        title: 'About The Program',
        image: {
            src: 'https://mars.nasa.gov/system/basic_html_elements/165_surface_experience_msl_desktop.jpg'
        },
        text: `Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012). Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.`
    },
    IMAGES_BY_DATE: {
        title: 'Mars Images By Date',
        imagesPerPage: 15,
    },
    MARS_WEATHER: {
        title: 'Mars Weather',
        imagesPerPage: 9,
        parametersNames:{
            AT: 'avgTemp',
            HWS: 'avgWind',
            PRE: 'avgPress',
            First_UTC: 'firsUTC',
            Last_UTC: 'lastUTC'
        }
    }
}

export const getConstants = () => {
    return constants
}
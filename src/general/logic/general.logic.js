import axios from 'axios';

export const getImages = async (earthDate) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=DEMO_KEY&page=1`
        );
        return response?.data?.photos;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedMonth = (month >= 10 || month < 10) ? month.toString() : `0${month}`;

    const formattedDate = `${year}-${formattedMonth}-${day}`;
    return formattedDate;
}
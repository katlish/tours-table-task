import {Promotion} from '../components/EshetToursPromotions/EshetToursPromotions';

const getFilteredTours = (tours:Promotion[], title:string) => {
    return tours.filter((tour) => {
        const textMatch = tour.title.includes(title);
        return textMatch;
    });
}

export default getFilteredTours;
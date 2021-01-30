import { Promotion } from "../../components/containers/EshetToursPromotions/EshetToursPromotions";

const getFilteredTours = (tours: Promotion[], title: string) =>
  tours.filter(tour => {
    const textMatch = tour.title.includes(title);
    return textMatch;
  });

export default getFilteredTours;

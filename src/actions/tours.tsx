import {Promotion} from '../components/EshetToursPromotions/EshetToursPromotions';

const ESHET_TOURS_API_URL = "https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized";


export function fetchTours() {
  return async (dispatch:any) => {
    try {
        const res = await fetch(`${ESHET_TOURS_API_URL}`,{
            method: "GET"   
        });

        const json = await res.json();
        const allPromotions: Promotion[] = json[0].Promotions.map((prom: any) => {
            let imgLink = prom.Img;
            let editedLink = imgLink.replace("{0}","Maximal");
            return {
                title: prom.Title,
                imgLink: editedLink
            }
        });
    

      dispatch(fetchToursSuccess(allPromotions));
    } catch (e) {
      dispatch(fetchToursError(e));
    }
  };
}

export function fetchToursSuccess(allPromotions: Promotion[]) {
  return {
    type: "FETCH_TOURS_SUCCESS",
    tours: allPromotions
  };
}

export function fetchToursError(e: any) {
  return {
    type: "FETCH_TOURS_ERROR",
    error: e
  };
}


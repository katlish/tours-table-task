import {Promotion} from '../../components/containers/EshetToursPromotions/EshetToursPromotions';
import imgSourceDefault from '../../assets/promoImage.jpg'
import {FETCH_TOURS_SUCCESS,FETCH_TOURS_ERROR} from './actionTypes';

const ESHET_TOURS_API_URL = "https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized";


export function fetchTours() {
  return async (dispatch:any) => {
    try {
        let allPromotions: Promotion[] = [];

        const res = await fetch(`${ESHET_TOURS_API_URL}`,{
            method: "GET"   
        });

        const json = await res.json();
        if (json.length && json[0].Promotions.length) {
        //  if (false) {
          allPromotions = json[0].Promotions.map((prom: any) => {
              let imgLink = prom.Img;
              let editedLink = imgLink.replace("{0}","Maximal");
              return {
                  title: prom.Title,
                  imgLink: editedLink
              }
          });
        }else{
          let imgLink = imgSourceDefault;
          for(let i=0; i<10; i++){
            allPromotions.push({
              title: "כותרת כלשהיא ממש ממש ממש ממש ארוכה ",
              imgLink
            })
          }
        }
    

      dispatch(fetchToursSuccess(allPromotions));
    } catch (e) {
      dispatch(fetchToursError(e));
    }
  };
}

export function fetchToursSuccess(allPromotions: Promotion[]) {
  return {
    type: FETCH_TOURS_SUCCESS,
    tours: allPromotions
  };
}

export function fetchToursError(e: any) {
  return {
    type: FETCH_TOURS_ERROR,
    error: e
  };
}


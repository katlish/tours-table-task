import React from "react";
import classes from "./EshetToursPromotions.module.css";
import { connect } from 'react-redux';
import loader from '../../assets/loader.gif';
import Tour from '../Tour/Tour';
import PageTitle from '../PageTitle/PageTitle';
import Input from '../Input/Input';
import { filterByTitle } from '../../actions/filters';
import getFilteredTours from '../../selectors/tours';

export interface Promotion{
    title: string,
    imgLink: string
}


function EshetToursPromotions(props:any) {
    
    const changeHandler = (text: string) => {
        props.dispatch(filterByTitle(text));
    }

    return (
      <div className={classes.EshetToursPromotions}>
        <div className={classes.PageContent}>
            <PageTitle title="טיולים מאורגנים"/>
            <div className={classes.FilteredTable}>
                <Input text={props.filters.title} changeHandler={changeHandler} label=":סינון ע״פ"/>

                {`${props.tours.totalTours} מתוך ${props.tours.tours.length} מציג`}

                <div className={classes.ToursTable}>
                    {   (!props.tours.tours.length) ? 
                        <img className={classes.Loader} src={loader} alt="Not found"/>
                            :
                            props.tours.tours.map((promotion: Promotion, index:number) => (
                            <Tour promotion={promotion} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
      
      </div>
    ) 
  }
  

const mapStateToProps = (state:any) => {
    return {
        ...state,
        tours: {...state.tours, 
                    tours: getFilteredTours(state.tours.tours, state.filters.title)
                }
    };
}


export default connect(mapStateToProps)(EshetToursPromotions);



  

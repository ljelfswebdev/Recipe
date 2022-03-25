import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'


const RandomPage = (meal) => {
    // console.log(meal)

    // const printPage = () => {
    //   console.log(meal)
    // }


    return ( 
        <div className={styles.container}>
        <Head>
          <title>LJ | Recipe of the day</title>
          <meta name="description" content="The recipe of the day" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Your Recipe
          </h1>
            <div className="container mt-2">
              <div className="row text-center">
              <div className="card mb-3 col-md-6 offset-md-3 p-2 mt-3">
                <img className="card-img-top" src={meal.meal.meals[0].strMealThumb} width={500} height={500} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{meal.meal.meals[0].strMeal}</h5>
                    <p className="card-text">{meal.meal.meals[0].strInstructions}</p>
                </div>
                </div>
                  <div className="justify-content-between">
                    <h3>
                      Like what you see??
                    </h3>
                  </div>
                  <div className='justify-content-between'>
                    <button className='btn btn-secondary mb-3' onClick={() => window.print()}>Print</button>
                  </div>
                <div className='justify-content-between '>
                    <Link href="/">
                    <a>
                        <button className="btn btn-primary mx-5 mb-3">Go Back</button>
                    </a>
                    </Link>
                    <Link href="/randomPage">
                    <a>
                        <button className="btn btn-success mx-5 mb-3">New Recipe</button>
                    </a>
                    </Link>
                </div>
                
                
              </div>
            </div>
        </main>

      </div>
    );

    
};



 
export default RandomPage;

export const getServerSideProps = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    return {
      props: { meal: res.data },
    };
  };
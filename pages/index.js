import Head from 'next/head'
import styles from '../styles/Home.module.css';

const Home = () => {
  const meal = [
    {id: '1', name :'Moussaka', imageUrl: './images/mossaka.jpg' , description: 'Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning. Stir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden.'},
    {id: '2', name : 'Steak Diane', imageUrl: './images/steak.jpg', description:'Heat oil in a 12" skillet over medium-high heat. Season steaks with salt and pepper, and add to skillet; cook, turning once, until browned on both sides and cooked to desired doneness, about 4 to 5 minutes for medium-rare. Transfer steaks to a plate, and set aside. Return skillet to high heat, and add stock; cook until reduced until to 1⁄2 cup, about 10 minutes. Pour into a bowl, and set aside. Return skillet to heat, and add butter; add garlic and shallots, and cook, stirring, until soft, about 2 minutes. Add mushrooms, and cook, stirring, until they release any liquid and it evaporates and mushrooms begin to brown, about 2 minutes. Add cognac, and light with a match to flambée; cook until flame dies down. Stir in reserved stock, cream, Dijon, Worcestershire, and hot sauce, and then return steaks to skillet; cook, turning in sauce, until warmed through and sauce is thickened, about 4 minutes. Transfer steak to serving plates and stir parsley and chives into sauce; pour sauce over steaks to serve.'},
    {id: '3', name : 'Eton Mess', imageUrl: './images/eton.jpg', description: 'Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration. Whip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using. Spoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint.'},
    {id: '4', name : 'Apply & Blackberry Crumble', imageUrl:'./images/crumble.jpg', description: 'Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured. Meanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan. To serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.'},
    {id: '5', name: 'Grilled Portuguese Sardines', imageUrl:'./images/sardines.jpg', description :'STEP 1 Put all of the ingredients, except the sardines, into a bowl and mix together with some seasoning. Pour into a baking dish, add the sardines and toss really well. Cover and chill for a few hours. STEP 2 Heat a BBQ or griddle pan until hot. Cook the sardines for 4-5 minutes on each side or until really caramelised and charred. Put onto a serving plate, drizzle with oil, sprinkle with a little more paprika and squeeze over the lemon wedges. '},
    {id: '6', name: 'Boulangère Potatoes' , imageUrl: '/images/potato.jpg', description: 'Heat oven to 200C/fan 180C/gas 6. Fry the onions and thyme sprigs in the oil until softened and lightly coloured (about 5 mins). Spread a layer of potatoes over the base of a 1.5-litre oiled gratin dish. Sprinkle over a few onions (see picture, above) and continue layering, finishing with a layer of potatoes. Pour over the stock and bake for 50-60 mins until the potatoes are cooked and the top is golden and crisp.'}
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>LJ | Recipes</title>
        <meta name="description" content="A recipe app created by Lewis Jelfs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Your Random Recipe App
        </h1>
        <div className='container align-items-center'>
          <div className="row text-center mt-3">
            <h2>Take a look</h2>
          </div>
          <div className='row text-center'>
          <div className=" d-flex flex-wrap">
            {meal.map(meal => {
              return(
                <div className="card mb-3 col-md-4 p-2" key='id'>
                <img className="card-img-top img-fluid" src={meal.imageUrl} width={500} height={500} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{meal.name}</h5>
                    <p className="card-text">{meal.description}</p>
                </div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home;


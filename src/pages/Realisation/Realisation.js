import React from 'react';
import './Realisation.css'
import GetRealisation from '../../components/GetRealisation/getRealisation'
import 'bootstrap/dist/css/bootstrap.min.css'
import portfolio1 from './portfolio1.jpg'
import portfolio2 from './portfolio2.png'
import portfolio3 from './portfolio3.png'


function Realisation() {

  const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
  portfolioItem.addEventListener('mouseover', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.add('image-blur');
  });

  portfolioItem.addEventListener('mouseout', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.remove('image-blur');
  });
});
  return (




<main>
<div>
          <div className="container">


          <div className="content-wrapper">
  <div className="portfolio-items-wrapper">

    <div className="portfolio-item-wrapper">
      <div className="portfolio-img-background"><img className="portfolio1" src={portfolio1} alt="portfolio1" /></div>

      <div className="img-text-wrapper">
        <div className="logo-wrapper">


        </div>

        <div className="subtitle">Nous avons bossé sur une API en python</div>
      </div>
    </div>
    <div className="portfolio-item-wrapper">
      <div className="portfolio-img-background"><img className="portfolio1" src={portfolio2} alt="portfolio2" /></div>

      <div className="img-text-wrapper">
        <div className="logo-wrapper">


        </div>

        <div className="subtitle">Réalisation d'un site Web PHP</div>
      </div>
    </div>

    <div className="portfolio-item-wrapper">
      <div className="portfolio-img-background"><img className="portfolio1" src={portfolio3} alt="portfolio3" /></div>

      <div className="img-text-wrapper">
        <div className="logo-wrapper">


        </div>

        <div className="subtitle">Réalisation d'un site Wordpress</div>
      </div>
    </div>






  </div>
</div>
</div>


</div>


</main>



  );
}

export default Realisation;

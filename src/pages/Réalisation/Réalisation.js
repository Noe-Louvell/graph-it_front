import React from 'react';
import './Réalisation.css'
import GetRéalisation from '../../components/GetRéalisation/getRéalisation'

function Réalisation() {


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

<section>
<p>jfeifojzofijzofijojf</p><p>jfeifojzofijzofijojf</p><p>jfeifojzofijzofijojf</p><p>jfeifojzofijzofijojf</p><p>jfeifojzofijzofijojf</p><p>jfeifojzofijzofijojf</p><p>jfeifojzofijzofijojf</p>
          <div>
          <div class="content-wrapper">
  <div class="portfolio-items-wrapper">

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio1.jpg)"></div>

      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/quip.png" alt=""/>

        </div>

        <div class="subtitle">Nous avons bosser sur une API en python</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio2.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/devcamp.png" alt=""/>
        </div>

        <div class="subtitle">Nous avons réalisé une TODO List en JS</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio3.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/eventbrite.png" alt=""/>
        </div>

        <div class="subtitle">Réalisation d'un blog en PHP avec système de login</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio4.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/shop-hacker.png" alt=""/>
        </div>

        <div class="subtitle">Nous avons réalisé un site vitrine pour les petits composteurs</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio5.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/crondose.png" alt=""/>
        </div>

        <div class="subtitle">Station météo connectée</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio6.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/dailysmarty.png" alt=""/>
        </div>

        <div class="subtitle">Modif de logiciel de DOLIBARR</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio7.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/dashtrack.png" alt=""/>
        </div>

        <div class="subtitle">Site Wordpress</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio8.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/devtrunk.png" alt=""/>
        </div>

        <div class="subtitle">Réalisation d'une app en react native</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio9.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/edutechional.png" alt=""/>
        </div>

        <div class="subtitle">Réalisation d'un site en react JS</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio10.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/ministry-safe.png" alt=""/>
        </div>

        <div class="subtitle">Réalisation du juste prix en python</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio11.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/open-devos.png" alt=""/>
        </div>

        <div class="subtitle">Réalisation des portfolio</div>
      </div>
    </div>

    <div class="portfolio-item-wrapper">
      <div class="portfolio-img-background" style="background-image:url(images/portfolio12.jpg)"></div>
      <div class="img-text-wrapper">
        <div class="logo-wrapper">
          <img src="images/logos/toastability.png" alt=""/>
        </div>

        <div class="subtitle">Réalisation d'une BDD</div>
      </div>
    </div>

  </div>
</div>
</div>



</section>

</main>



  );
}

export default Réalisation;

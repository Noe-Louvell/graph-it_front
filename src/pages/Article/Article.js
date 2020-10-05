import React from 'react';
import './Article.css'
import GetArticle from '../../components/GetArticle/getArticle'

function Article() {

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

            <section className="hero">
                <div className="container">
                    <div className="main-message">
                        <h3> Articles</h3>
                        <h1> Actualités</h1>
                        <p></p>
                    </div>
                </div>
            </section>


            <div>
                <div className="container">
                    <div className="content-wrapper">
                        <div className="portfolio-items-wrapper">

                            <GetArticle/>


                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Article;

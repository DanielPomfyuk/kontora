import React, { useEffect, useRef } from 'react'
import "../styles/Home.css"
function Home() {
    let photo = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', function () {
            photo.style.opacity = 1 - +window.pageYOffset / 550 + '';
            photo.style.top = +window.pageYOffset + 'px';
            photo.style.backgroundPositionY = -+window.pageYOffset / 2 + 'px';
        })
    }, [])
    const firstText = "В дороге Саша всегда эмоционально рассказывает истории – поэтому Валера всегда за рулем. И да, мы проверяли – нету у Саши родственников из Италии.️Саша и Валера работают вместе уже 6 лет – за это время Валера женился и растит сына.А Саша просто молодец.Валера обожает футбол и яхты.Но со вторым не всё так просто, он хочет назвать её в честь Саши.Ждём когда на воду сойдёт яхта «Малый»."
    const secondText = "Сегодня эта фотография с нашего альбома, которая стоит в серванте галереи айфона, напоминает одно. Во время всеобщей паники нужно успокоится, выпить чашечку кофе и подумать, что ты будешь делать дальше, когда паника закончится?Мы уже знаем.Ты захочешь веселиться, а мы такие, бац, и тут как тут!Только перед этим не забудь позвонить нашей Ире и забронировать нас, номер ты знаешь"
    return (<React.Fragment>
        <div className="header">
            <div ref={el => photo = el} id="bg"></div>
        </div>
        <section className="about">
            <div className="contentBx">
                <h2 className="heading">Немного о нас</h2>
                <p className="text">{firstText}<br /><br />{secondText}<br /><br />{firstText}</p>
            </div>
            <div className="imgBx">

            </div>
        </section>
        <section className="services">
            <h2 className="heading">Наши услуги</h2>
            <p className="text">{secondText}</p>
            <div className="serviceContainer">
                <div className="serviceBx">
                    <img src="https://www.davidtett.com/img/s/v-10/p2538187287-3.jpg"></img>
                    <h2>Свадьба</h2>
                </div>
                <div className="serviceBx">
                    <img className="secondImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/this-official-handout-christening-photograph-released-by-news-photo-1568545126.jpg"></img>
                    <h2>Крестины</h2>
                </div>
                <div className="serviceBx">
                    <img className="thirdImg" src="https://c.stocksy.com/a/gnF500/z9/1252380.jpg?1578560334"></img>
                    <h2>Корпоратив</h2>
                </div>
            </div>
        </section>
    </React.Fragment >
    )
}
export default Home;

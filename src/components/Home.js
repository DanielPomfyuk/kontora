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
    const pic = "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/91587380_569561390580791_6527230681733531975_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=lj6uAVktbHEAX9LOj5A&oh=74115e6f2d751c1d85b2af0a4f12cdec&oe=5EAB4A15"
    const text = "Я спокойно отношу себя к тем людям, в жилах которых течёт эспрессо. А ещё я очень люблю готовить. И говорить по-утиному. Не спрашивайте.   ⠀Говорят, диджеи не любят, когда к ним подходят заказать песню.Чушь! Надо уметь это правильно делать – в моём случае, с кусочком лимонного пирога И напоследок у меня к вам просьба – танцуйте! С собакой, в платье и даже после первого тоста.Музыку беру на себя "
    return (<React.Fragment>
        <div className="header">
            <div ref={el => photo = el} id="bg"></div>
        </div>
        <div className="homeContainer">
            <div className="post">
                <img src={pic} alt="25cm"></img>
                <p>{text}</p>
            </div>
        </div>
    </React.Fragment >
    )
}
export default Home;

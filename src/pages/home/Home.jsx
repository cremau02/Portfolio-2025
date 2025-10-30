import './home.css'

const Home = () => {

    document.querySelectorAll('.title.M').forEach(el => {
        el.addEventListener('click', () => {
            console.log('click');
        });
    });
    /**<div className="ghost"></div>*/
    return (
        <div className="page">
            <div className="pageHomeTop">
            </div>
            <div className="pageHomeBar">
                <div id="titleList">
                    <p className="title M">Me</p>
                    <p className="title MW">My Works</p>
                    <p className="title SM">Social Media</p>
                    <div className="wave-container">
                        <h1 className="wave-text title">
                            <span>M</span><span>E</span>
                        </h1>
                    </div>

                </div>

            </div>

            <div className="pageHomeBottom">

            </div>
            <div className="ghost"></div>
        </div>

    )
}

export default Home
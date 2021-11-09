const CardOverlay = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="content"> <a href="#">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://i.imgur.com/7cNRozs.jpg" />
                        <div className="content-details fadeIn-bottom">
                            <h3 className="content-title">Geysers Valley Hotel</h3>
                            <p className="content-text"><i className="fa fa-map-marker"></i> Russia</p>
                        </div>
                    </a> </div>
                </div>
            </div>
        </div>
    )
}

export default CardOverlay;
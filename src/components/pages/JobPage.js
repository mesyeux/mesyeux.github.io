import React from 'react'

export const JobPage = props => {
    // function importAll(r) {
    //     return r.keys().map(r);
    // }

    // function componentWillMount() {
    //     var path = process.env.PUBLIC_URL;
    //     console.log(process.env.PUBLIC_URL);
    //     listOfImages = this.importAll(require.context(path + '/images', false, /\.(png|jpe?g|svg)$/));

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
      
    const images = importAll(require.context('/images', false, /\.(png|jpe?g|svg)$/));


    return (
        <>
            {/* {
                listOfImages.map(
                    (image, index) => <img key={index} src={image} alt="info"></img>
                )
            } */}
            <img src={images['shoot1.jpg']} />
        </>
    )
}

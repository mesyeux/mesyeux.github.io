import React from 'react'
import CardItem from '../CardItem';
import ModelNavbar from '../ModelNavbar';
import { COVERIMAGES } from '../images';

export const JobPage = props => {
    const pathname = window.location.pathname;
    const folder = pathname.substring(pathname.lastIndexOf('/') + 1);
    const noOfItems = COVERIMAGES.filter((item) => item.folder === folder)[0]['noOfItems'];

    const array = Array.from({length: noOfItems}, (_, i) => i + 1)
    return(
            <>
                <ModelNavbar/>
                {array.map((item) => 
                    (
                    <CardItem
                        src={require('/Users/chlo/website/portfolio/src/assets/images/' + folder + '/' +
                        item +
                        '.jpg')}
                        label='lookbook'
                    />
                    ))}
            </>
        )
}

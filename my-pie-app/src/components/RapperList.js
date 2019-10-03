import React, {
    useState,
    useEffect
} from 'react';
import Rapper from '../Rappers';


export const Rappers = props => {
        const [artistNames, setArtistNames] = useState([{
                id: 1,
                Name: 'Jay-Z',
                clout: 0,
            },
            {
                id: 2,
                Name: 'Drake',
                clout: 0,
            },
            {
                id: 3,
                Name: 'J Cole',
                clout: 0,
            },
            {
                id: 4,
                Name: 'Kendrik Lamar',
                clout: 0,
            },
            {
                id: 5,
                Name: 'Young Thug',
                clout: 0,
            },
            {
                id: 6,
                Name: 'Pusha T',
                clout: 0,
            },
            {
                id: 7,
                Name: 'Cardi B',
                clout: 0,
            },
            {
                id: 8,
                Name: 'Kanye West',
                clout: 0,
            },
            {
                id: 9,
                Name: 'ScHoolboyQ',
                clout: 0
            }
        ]);



        function upClout(artist, clout) {
            console.log(artist, clout);
            setArtistNames(
                artistNames.map(artistName => {
                    if (artistName.Name === lit) {
                        artistName.clout++;
                    }
                    return {
                        Name: artistName.Name,
                        clout: artistName.clout
                    };
                })
            );
        }

        function downClout(artist, clout) {
            console.log(artist, clout);
            setArtistNames(
                artistNames.map(artistName => {
                    if (artistName.Name === lit) {
                        artist.clout--;
                    }
                    return {
                        Name: artistName.Name,
                        clout: artistName.clout
                    };
                })
            );
        }

        return ( <div style = {{display: "flex", flexDirection: "column"}} > {
                artistNames.map(artistName => {
                    return ( 
                        < Rapper 
                        lit = {artistName.Name}
                        clout = {artistName.clout}

                    )
                })
            }


            </div> >




        )
    }

// src/contexts/CardContext.js
import React, { createContext, useState } from 'react';
import newspaper from '../assets/newspaper.jpg'
import table from '../assets/table.jpg'
import peace from '../assets/peace.jpg'
import protest from '../assets/protest.jpg'
import crowd from '../assets/crowd.JPG'
import reporter from '../assets/reporter.jpg'
import gun from '../assets/guns2.jpg'
import lauraCourt from '../assets/lauracourtimage.JPG'
import carcrash from '../assets/carcrash.jpg'
import denture from '../assets/denture.jpeg'
import faruqi from '../assets/faruqi.JPG'
import bondy from '../assets/bondy.JPG'
import bondyTwo from '../assets/bondyTwo.JPG'
import lauraDianna from '../assets/lauraDianna.JPG'
import sandra from '../assets/sandra.JPG'
import vella from '../assets/vella.JPG'

// Create Context
const CardContext = createContext();

// Create a provider component
export function CardProvider({ children }) {
    const [cards] = useState([
        {
            id: 1,
            title: 'Defence seeks house arrest for Windsor denturist with 13 sex assault convictions',
            text: 'Criminal defence lawyer Laura Joy and assistant Crown attorney Tim Kavanagh are shown outside the Superior Court of Justice building in downtown Windsor following the sentencing hearing for former Windsor denturist Mario Mouamer',
            image: lauraCourt
        },
        {   
            id: 2,
            title: 'Windsor driver sentenced to house arrest for 2019 crash that killed her brother',
            text: 'A Windsor driver has been sentenced to house arrest for a fatal collision that killed her brother in 2019. Court learned the driver was speeding at 100 kilometres per hour on University Avenue',
            image: carcrash
        },
        {   
            id: 3,
            title: "Assault charges withdrawn against former CKHA Chief of Staff",
            text: 'A high profile doctor in Chatham, who was accused of assaulting his wife, has had his charges dropped.',
            image: faruqi
        }
    ]);

    const [cardsTwo] = useState([
        {
            id: 4,
            title: 'Pair accused of extorting local doctor acquitted',
            text: 'Tammy Hands and David Andrew Bondy were found not guilty of trying to extort $25,000 from a local doctor.',
            image: bondy,
            imageTwo: bondyTwo
        },
        {   
            id: 5,
            title: "Court dismisses $2M lawsuit that claimed 'malicious prosecution'",
            text: 'A legal assistant caught up in an RCMP sting and years of subsequent criminal proceedings that ended in the conviction of her immigration lawyer boss has had her $2-million “malicious prosecution” civil suit rejected by the courts.',
            image: lauraDianna,
            imageTwo: sandra
        },
        {   
            id: 6,
            title: "Walkerville pharmacist found not guilty of sexual assault",
            text: 'Pharmacist Francesco Vella was found not guilty Wednesday of sexual assault. Ontario Court Justice Gregory Campbell said he did not find some of the complainant’s testimony credible.',
            image: vella
        }
    ]);

    return (
        <CardContext.Provider value={{ cards, cardsTwo }}>
            {children}
        </CardContext.Provider>
    );
}

export default CardContext;

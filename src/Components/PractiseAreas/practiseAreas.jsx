import React from 'react'
import Card from '../Card/card'
import gun from '../../assets/gun.JPG'
import drug from '../../assets/drug.JPG'
import handcuffs from '../../assets/handcuffs.JPG'
import assault from '../../assets/assault.JPG'
import punch from '../../assets/punch2.JPG'
import nopunch from '../../assets/nopunch.JPG'
import threat from '../../assets/threat.JPG'
import car from '../../assets/car2.JPG'
import hammer from '../../assets/hammer2.JPG'
import trafficlights from '../../assets/trafficLights.JPG'

const PractiseAreas = () => {
    const cards = [
        {
            title: 'Sexual Assault',
            text: 'A charge of sexual assault can affect you for the rest of your life. If you are convicted, your education, reputation, and ability to earn a living can be greatly reduced.',
            image: assault 
        },
        {
            title: 'Impaired Driving/DUI',
            text: 'If you have been arrested for impaired driving, you’ll need an experienced criminal defence lawyer to explain your options and fight for the best possible outcome.',
            image: car
        },
        {
            title: 'Domestic Assault',
            text: 'Accusations of domestic assault are particularly difficult to handle because they involve intimate partners or family members.',
            image: nopunch
        },
        {
            title: 'Assault',
            text: 'If you’re considering pleading guilty to a charge of assault, you should know that the resulting conviction can have permanent consequences.',
            image: punch
        },
        {
            title: 'Uttering Threats',
            text: 'Threatening someone is a crime under Canadian law. Even if you didn’t mean it or simply spoke in anger, you could still be charged and convicted for uttering threats.',
            image: threat
        },
        {
            title: 'Mischief',
            text: 'If you have been accused of willfully damaging someone’s home or possessions with no intent to steal, our defence lawyers offer free online consultations to explain your options.',
            image: hammer
        },
    ];

    return (
        <div id="practiseAreas">
            <Card cards={cards} preTitle="Our" pageTitle="Practise Areas"/>
        </div>
    );
};


export default PractiseAreas




// import React from 'react'
// import Card from '../Card/card'
// import gun from '../../assets/gun.JPG'
// import drug from '../../assets/drug.JPG'
// import handcuffs from '../../assets/handcuffs.JPG'
// import violence from '../../assets/violence.JPG'
// import car from '../../assets/car.JPG'
// import trafficlights from '../../assets/trafficLights.JPG'

// const PractiseAreas = () => {
//     const cards = [
//         {
//             title: 'Gun & Weapon Charges in the State of Illinois',
//             text: 'Weapons charges are more serious than people realize because many carry mandatory minimum prison sentences - sometimes even for 1st offenders. This area of law can be complicated by recent decisions involving the 2nd Amendment so it is important that you have an attorney that is well versed in this area.',
//             image: gun 
//         },
//         {
//             title: 'Drug Charges in the State of Illinois',
//             text: 'There are many types of drug offenses ranging from simple possession to trafficking. Whether the arrest came about because of a suspect traffic stop, hand to hand transaction, or warrant based on a confidential informant you need someone familiar with 4th Amendment and narcotics law.',
//             image: drug
//         },
//         {
//             title: 'Violent Crime Charges in the State of Illinois',
//             text: 'There is no more serious charge with than murder where the penalties range from 20 years to life. But most people don’t realize that the penalties for attempt murder are almost as harsh and are increasing being sought by the State’s Attorney. Attempt murder carries a minimum of 21, 25, or 31 if a gun was involved. Don’t take any chances.',
//             image: handcuffs
//         },
//         {
//             title: 'Domestic Violence Charges in the State of Illinois',
//             text: 'A domestic battery can result in jails sentences, community service, court ordered counseling and/or treatment, orders of protection, exclusion from the marital/shared residence, etc. If you are charged with any offense involving domestic violence you need someone to advocate on your behalf.',
//             image: violence
//         },
//         {
//             title: 'DUI Defense in the State of Illinois',
//             text: 'Being charged with Driving Under the Influence is serious business. It can result in suspension/revocation of your license, fines, fees, classes, SWAP, jail time, loss of employment, etc. The consequences are too serious for anything less than a knowledgeable and experienced defense attorney.',
//             image: car
//         },
//         {
//             title: 'Burglary & Robbery Defense in the State of Illinois',
//             text: 'Residential burglary charges carry a minimum 4 year prison sentence. Armed robbery carries a minimum 6 but that minimum can increase to 21, 26 or 31 if a gun was involved. These are very serious charges that can result in substantial prison sentences so you need to fight back with everything you have.',
//             image: trafficlights
//         },
//     ];

//     return (
//         <div id="practiseAreas">
//             <Card cards={cards} preTitle="Our" pageTitle="Practise Areas"/>
//         </div>
//     );
// };


// export default PractiseAreas
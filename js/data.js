"use strict";

const titles = [
//Apie sia sekcija dar teks pagalvoti (ar galima ja generuoti)
    {
id: 'about-me',
span: "me",
main: "about"
},
    {
id: 'my-services',        
span: "my",
main: "services"
    },
{
id: 'my-resume',        
span: "my",
main: "resume"
    },
    {
id: 'my-portfolio',
span: "my",
main: "portfolio"
    },
    {
id: 'my-blogs',
span: "my",
main: "blogs"
    },
        {
id: "contact-me",
span: "me",
main: "contact"
    }
]

const resume = [
    {
         //KAIP DARYT JEI exp ILGESNIS??? 
         //KAIP DARYTI jei yra daugiau darbu?? (DAbar skeliu per puse i du stulpelius)
         //ar imanoma palyginti stulpeliu aukscius?? el.clientHeight() >> duoda auksti
        company: "aplle",
        dates: "OCT 2018 - present",
        exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
    },
    {
        company: "google",
        dates: "JUNE 2015 - OCT 2018",
        exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
    },
    {
        company: "spotify",
        dates: "DEC 2014 - JUNE 2015",
        exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque. "
    },
    {
        company: "ibm",
        dates: "NOW 2010 - DEC 2014",
        exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
    }
    ,
    {
        company: "ibm",
        dates: "NOW 2010 - DEC 2014",
        exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
    }
    ,
    {
        company: "ibm",
        dates: "NOW 2010 - DEC 2014",
        exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque."
    }
]


const services = [

    //kaip padaryti, kad esant daugiau services isscentruotu paskutine eiluteje esantis ?? arba ka daryti kad paskutineje eiluteje nebutu tik vienas service??
    { 
        icon: "television",
        title:"Search Optimization",
        description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    },
    { 
        icon: "address-card",
        title:"Logo & Identity",
        description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    },
    { 
        icon: "balance-scale",
        title:"Graphics Design",
        description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    },
    { 
        icon: "mobile",
        title:"Fully Responsive",
        description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    },
    { 
        icon: "wrench",
        title:"Advanced Options",
        description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    },
    { 
        icon: "scissors",
        title:"Reasonable Pricing",
        description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    }
    ,
    // { 
    //     icon: "scissors",
    //     title:"Reasonable Pricing",
    //     description: "The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading."
    // }
    
]
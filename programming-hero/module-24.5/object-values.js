let company = {
    name : 'Reliance',
    established : 1958,
    profitable : true,
    family : ['Dhirubhai Ambani', 'Kokilaben Ambani', 'Mukesh Ambani', 'Anil Ambani'],

    industries : [{energy : 'Reliance Petroleum', founded : 2008}, {entertainment : 'JioCinema',  founded : 2016}, {retail : 'JioMart',  founded : 2019} ],

    acquisitions: {
        firm : {
            BSES : 'May 2000',
            FLAG: 'Oct 2003',
            'Metro Adlabs' : 'July 2005',
            Vanco : 'May 2008',
            Codemasters  : 'Apr 2010'
        },

        renamed : {
            BSES : 'Reliance Infrastructure',
            FLAG: 'Reliance Globalcom',
            'Metro Adlabs' : 'Reliance Entertainment',
            Vanco : 'Reliance Globalcom',
            Codemasters  : 'Zapak'
        }
    },

    companyAge : function (establishedYear, currentYear){
        console.log(currentYear - establishedYear);
    }
}

company.companyAge(1958, 2024);
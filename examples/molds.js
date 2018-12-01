var molds = [];
molds.push({
    bool: 'boolean',
    name: 'name',
    email: 'email',
    word: 'word',
    about: 'text',
    birthday: 'date:1980;2000',
    location:{
        lat: 'latitude', 
        lng: 'longitude'
    }
});

module.exports = molds;
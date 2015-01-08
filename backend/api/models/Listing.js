/**
 * Listing.js
 *
 * @description :: Real estate listings.
 * @docs        :: https://github.com/elwebmaster/realestate/wiki/Listing
 */

module.exports = {

  attributes: {

    forSale: {
      type: 'boolean',
      required: true
    },

    title: {
      type: 'string',
      required: true
    },

    address: {
      type: 'string',
      required: true
    },

    price: {
      type: 'float',
      required: true
    },

    currency: {
      type: 'string',
      required: true
    },

    area: {
      type: 'float',
    },

    areaUnits: {
      type: 'string',
    },
    
    numRooms: {
      type: 'float',
    },

    floor: {
      type: 'integer',
    },

    description: {
      type: 'string',
    },

    furnished: {
      type: 'boolean',
    },

    parking: {
      type: 'integer',
    },

    elevator: {
      type: 'boolean',
    },

    luxurious: {
      type: 'boolean',
    },

    alarm: {
      type: 'boolean',
    },

    ac: {
      type: 'boolean',
    },

    internet: {
      type: 'boolean',
    },

    visible: {
      type: 'boolean',
    },

    photos: {
      collection: 'Photo',
      via: 'forListing'
    }
    
    city: {
      model: 'City'
    }

    user: {
      model: 'User'
    }
  }
};

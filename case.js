function capitalize (string) {

    const capitalizedFirstLetter = string.slice(0, 1).toUpperCase() + string.slice(1);
    return capitalizedFirstLetter;
    
  }
  
  module.exports = capitalize;


export const getCities = (data ) => {
 
    let cityNames = [];
    let finalArr = [];
    data.forEach((el) => {
        if (!cityNames.includes(el.city)) {
            cityNames.push(el.city);
            
        }
    });

  

    cityNames.forEach((item) => {
   
        const filteredCity = data.filter((el) => item === el.city);
        let obj = {
            city: item,
            numberOfStores: filteredCity.length,
            latitude: filteredCity[0].latitude,
            longitude: filteredCity[0].longitude
        };   
       

        finalArr.push(obj);
        
    });



    return finalArr;
};

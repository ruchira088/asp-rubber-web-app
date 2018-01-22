const googleMapsService = new google.maps.places.AutocompleteService()

export const getPredictions = input =>
    new Promise((resolve, reject) => {
        googleMapsService.getQueryPredictions({ input }, (predictions, status) => {
            if (status != google.maps.places.PlacesServiceStatus.OK) {
                reject(status)
            } else {
                resolve(predictions)
            }
        })
    })
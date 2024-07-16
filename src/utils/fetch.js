const fetchingData = (url) => {
    fetch("url").then(response => response.json())
        .then((data) => data);
};

export default fetchingData;


// para usarlo el codigo es
// fetchingData("https://url")
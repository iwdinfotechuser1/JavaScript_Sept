// const result = await somePromise;  

function getData() {
    return Promise.resolve("Data Received");
}

async function displayData(){
    const result = await getData();

    console.log(result);
}

displayData();
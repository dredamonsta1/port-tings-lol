let url = " https://www.hatchways.io/api/assessment/students";
fetch(url)
    .then(data => data.json())
    .then(response => console.log("pic:",response.name));
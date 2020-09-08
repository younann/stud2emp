function searchit() {
    let job = document.getElementById("searchj").value;
    let loc = document.getElementById("location").value;
    let url = 'https://api.adzuna.com/v1/api/jobs/us/search/1?&results_per_page=20&content-type=application/json&app_id=8253435f&app_key=b92f732782a93773bccd2db020ac87c1&' + 'what=' + job + '&where=' + loc;
    console.log(url)
}
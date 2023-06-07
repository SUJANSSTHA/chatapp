const searchBar = document.querySelector(".users .search input"),
    searchBtn = document.querySelector(".users .search button");
// searchBar.onclick = () => {
//     searchBar.classList.add("active");
//     searchBar.classList.toggle("active");
// }
searchBtn.onclick = () => {
    searchBar.classList.toggle("show");
    searchBtn.classList.toggle("active");
    searchBar.focus();
    if (searchBar.classList.contains("active")) {
        searchBar.value = "";
        searchBar.classList.remove("active");
    }
}
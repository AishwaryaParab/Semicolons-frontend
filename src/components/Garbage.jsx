const handleSearch = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);

    // new logic 
    // setName(e.target.value);

    // axios.get(`http://localhost:5000/employees?name=${name}`).then((res) => {
    //   console.log(res.data);

    // })
    //

    if(searchTerm !== "") {
      const filteredResults = people.filter((item) => {
        return Object.values(item).join(" ").toLowerCase().includes(e.target.value.toLowerCase());
      })

      setSearchResults(filteredResults);
    } else {
      setSearchResults(people);
    }
  } 


  {minPageNumber !== 1 && <ArrowCircleLeftRounded sx={{ color: "#F5AE45", cursor: "pointer"}} onClick={() => {setMinPageNumber(minPageNumber - pageNumberLimit); setMaxPageNumber(minPageNumber - pageNumberLimit)}} />}
  {/* {[...Array(Math.ceil(searchResults.length/10))].map((_, index) => {
    return <span className={page === (index+1) ? "active" : "inactive"} onClick={() => {setPage(index+1)}}>
      {index + 1}
    </span>
  })} */}



 {[...Array(pages)].map((_, index) => {
      if(page >= minPageNumber && page <= maxPageNumber) {
        return <span key={index} onClick={() => {setPage(index + 1)}}>{index + 1}</span>
       }
  }) 
 } 


  {maxPageNumber !== pages && <ArrowCircleRightRounded sx={{ color: "#F5AE45", cursor: "pointer"}} onClick={() => {setMinPageNumber(minPageNumber + pageNumberLimit); setMaxPageNumber(maxPageNumber + pageNumberLimit)}} />} 
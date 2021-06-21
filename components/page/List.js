function ExampleOfList() {
  //     let paging = {
  //         pageSizes: [2, 50, 100, 200],
  //         count: 20,
  //         pageNumber: 1
  //     };
  return <ZurCartList
    cartTitle="لیست مجوز ها"
    evenAdd={function () { console.log("push Add"); }}
    evenEdit={function (item) { console.log("push edit id :", item) }}
    evenDelete={function (item) { console.log("push delte", item) }}
    ApiGetData="/GetDataByPaging"
  // paging={paging}
  // columns={[
  //     {
  //         field: "name",
  //         filterValue: null,
  //         hasFilter: true,
  //         hasSort: true,
  //         sortType: 0,
  //         title: "نام",
  //     }
  // ]}
  />
}


import { useState } from "react";

export default function XTable() {
  const [xtabledata,setXtabledata] =useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

   

    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]) 
console.log(xtabledata, "Xdatatable")
  const handlesort = () => {
    setXtabledata([...xtabledata].sort((a, b) => new Date(a.date) - new Date(b.date)))
    console.log(xtabledata,"Date")
  };
  const handleviews = () => {
    setXtabledata([...xtabledata].sort((a,b)=>a.views-b.views))
    console.log(xtabledata,"Views")
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handlesort}>Sort by Date</button>
      <button onClick={handleviews}>Sort by Views</button>
      <table>
        <tr><th>Date</th>
        <th>Views</th>
        <th>Article</th></tr>
        <tbody> {xtabledata.map((item,index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}</tbody>
       
      </table>
    </>
  );
}

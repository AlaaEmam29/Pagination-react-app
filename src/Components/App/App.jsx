import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
import Users from "../Users/Users";

export default function App() {
  const { loading, data } = useGlobalContext();
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (loading) return
    console.log(data[page])
    setUsers(data[page])
  }, [loading, page])

  const customPage = (i) => {
    setPage((oldPage) => {
      let customPage = oldPage + i
      if(customPage > data.length - 1) {
        customPage = 0
      }  if (customPage < 0) {
        customPage = data.length - 1
      }
      return customPage
    })
  }



  return (
    <>
      <div className="container w-75 py-5 text-dark text-center">
        <h1>{loading ? "Loading..." : "pagination"}</h1>
        <div className="brdr"></div>
        <div className="row  pt-3 align-items-center">
        {users.map((user) => {
          return <Users key={user.id} {...user} />
        })}
      </div>
        {!loading && <nav  aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
            <button className="page-link"    onClick={
              () => customPage(-1)
            }>Previous</button>
          </li>
          {
            data.map((_, index) => (
              <li key={index} className="page-item"><button className="page-link" onClick={() => setPage(index)}>{index + 1}</button></li>
  ))}
          <li className="page-item">
            <button className="page-link" onClick={
              () => customPage(1)
            }>Next</button>
          </li>
        </ul>
      </nav>}
      </div>
    </>
  );
}

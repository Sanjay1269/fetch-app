// import axios from "axios"
// import React, { useState, useEffect } from "react"

// function Fetch() {
//   const url = "https://jsonplaceholder.typicode.com/posts"

//   // fetch
//   const [posts, setPosts] = useState([])

//   const fetchData = async () => {
//     const response = await axios.get(url)
//     setPosts(response.data)
//     setFilteredData(response.data)
//   }

//   // ascending
//   const [postsAsc, setPostsAsc] = useState([])

//   const ascending = async () => {
//     const response = await axios.get(url)
//     setPostsAsc(response.data)
//   }

//   // descending
//   const [postsDesc, setPostsDesc] = useState([])

//   const descending = async () => {
//     const response = await axios.get(url)
//     setPostsDesc(response.data.reverse())
//   }

//   // search
//   const [filteredData, setFilteredData] = useState(posts)

//   const handleSearch = (event) => {
//     let value = event.target.value.toLowerCase()
//     let result = []
//     console.log(value)
//     result = posts.filter((data) => {
//       return data.title.search(value) !== -1
//     })
//     setFilteredData(result)
//   }

//   return (
//     <div>
//       <nav>
//         <button className="btn btn-light" onClick={fetchData}>
//           Fetch Data
//         </button>
//         <button className="btn btn-light" onClick={ascending}>
//           Ascending
//         </button>
//         <button className="btn btn-light" onClick={descending}>
//           Descending
//         </button>
//         <input type="text" onChange={(event) => handleSearch(event)} />
//       </nav>
//       <div className="card">
//         {filteredData.map((data, index) => {
//           return (
//             <ul className="list-group list-group-flush" key={index}>
//               <li className="list-group-item">
//                 <h3>{data.title}</h3>
//               </li>
//             </ul>
//           )
//         })}
//         {posts &&
//           posts.map((data, index) => {
//             return (
//               <ul className="list-group list-group-flush" key={index}>
//                 <li className="list-group-item">
//                   <h3>title - {data.title}</h3>
//                 </li>
//               </ul>
//             )
//           })}
//         {postsAsc &&
//           postsAsc.map((data, index) => {
//             return (
//               <ul className="list-group list-group-flush" key={index}>
//                 <li className="list-group-item">
//                   <h3>
//                     {data.id} - {data.title}
//                   </h3>
//                 </li>
//               </ul>
//             )
//           })}
//         {postsDesc &&
//           postsDesc.map((data, index) => {
//             return (
//               <ul className="list-group list-group-flush" key={index}>
//                 <li className="list-group-item">
//                   <h3>
//                     {data.id} - {data.title}
//                   </h3>
//                 </li>
//               </ul>
//             )
//           })}
//       </div>
//     </div>
//   )
// }

// export default Fetch

import React, {useEffect, useState } from 'react';
// import products from "./product";
import product1 from './product1';

function Product() {
    const [users, setusers] = useState([])

    useEffect(() => {
        let users = product1.map(p => `${p.id}-${p.title}`);
        setusers(users)
    }, []);

    const sortDescending = () => {
        const sortDescusers = [...users]
        sortDescusers.sort((a, b) => a - b).reverse()
        setusers( sortDescusers )
    }

    const sortAscending = () => {
      const sortAscusers = [...users]
      sortAscusers.sort((a,b) => {
        return a-b
      })

      setusers(sortAscusers)
    }

  
      // const handleSearch = (event) => {
      //   let value = event.target.value.toLowerCase()
      //   let result = []
      //   console.log(value)
      //   result = users.filter((data) => {
      //     return data.title.search(value) !== -1
      //   })


      const handelSearch = (event) => {
        console.log(event.target.value);
        let result=[]
        let value = event.target.value
        console.log(users)
        result = users.filter((data) => {
          return data.search(value) !==-1
        })
      }
      
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={sortAscending}>ascending</button>
        <button className="btn btn-primary m-2" onClick={sortDescending}>descending</button>
        <input type="text" onChange={(event) => handelSearch(event)} placeholder='Search.....' />
        <button className="btn btn-primary m-2" >Search</button>
        {/* <input type="text" onChange={(event) => handleSearch(event)}/> */}
        <ul className="list-group list-group-flush" >
          {
            users.map((p, i) => { 
              return <li className="list-group-item" key={i}>{p}</li>;
            })
          }
        </ul>
      </div>
    );
  }
export default Product;


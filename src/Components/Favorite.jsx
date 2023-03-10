import React, { useEffect, useState } from 'react'
import {app} from '../firebase'
import { getDatabase, ref, onValue, remove } from 'firebase/database'
import LocalMap from './LocalMap';

const Favorite = () => {
  const [documents, setDocuments] = useState(null);
  const db = getDatabase(app);
  const [doc, setDoc] = useState(null);
  const callAPI = () => {
    const email = sessionStorage.getItem('email').replace('.','');
    onValue(ref(db, `favorite/${email}`),(snapshot)=>{
      const data=snapshot.val();
      let rows=[];
      snapshot.forEach(row=>{
        rows.push(row.val());
      });
      console.log(rows);
      setDocuments(rows);
    })
  }

  useEffect(()=> {
    callAPI();
  }, []);

   const onDelete = (e, id) => {
        e.preventDefault();
        if(!window.confirm(`${id}번을 삭제합니까?`)) return;
        //삭제
        const email=sessionStorage.getItem('email').replace('.','');
        remove(ref(db, `favorite/${email}/${id}`));
    }


    const onClickMap = (e, doc) => {
      e.preventDefault();
      setDoc(doc);
    }
  if(documents === null) return <h1>Loading...</h1>
  return (
    <div>
        <h1>Favorite</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>장소명</td>
              <td>주소</td>
              <td>전화번호</td>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc=>
              <tr key={doc.id}>
                <td>{doc.id}&nbsp;&nbsp;
                  <a href="#" onClick={(e)=>onDelete(e, doc.id)}>🗑</a>
                </td>
                <td>{doc.place_name}</td>
                <td>{doc.address_name}
                <a href="#" onClick={(e)=>onClickMap(doc)}>위치</a>
                </td>
                <td>{doc.phone}</td>
              </tr>  
            )}
          </tbody>
        </table>
        <hr/>
        {doc !==null && <LocalMap local={doc}/>}
        </div>
  )
}

export default Favorite
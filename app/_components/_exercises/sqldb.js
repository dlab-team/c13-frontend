import React from "react";
import initSqlJs from "sql.js";
import { useEffect, useState } from "react";

const Sqldb = ({ queries, toExecute, executeQuery, onError, setdbResults, modifier }) => {

  const [db, setDb] = useState(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    })
      .then((SQL) => {
        const myDb = new SQL.Database();
        setDb(myDb);
      })
      .then(() => {
        setReady(true);
      })
      .catch((err) => setError(err));
  }, [queries]);

  useEffect(() => {
    if (!db) return;
    if (toExecute == false) return;
    queries.map((query) => db.run(query));
    let result = null
    try {
      if (typeof executeQuery === typeof "string") {
        result = db.exec(executeQuery);
      }
      else {
        if (executeQuery.getValue() == ''){
          onError('Debes ingresar una query')
        } else {

          result = db.exec(executeQuery.getValue())
          modifier ? result = db.exec(modifier) : ''
        }
      }
      setdbResults(result)
    } catch (error) {
      onError(error)
    }
    
  }, [toExecute]);

  // if (error) {
  //   return <div>{error.message}</div>;
  // }
  return (
    <>
    </>
  )
};

export default Sqldb;

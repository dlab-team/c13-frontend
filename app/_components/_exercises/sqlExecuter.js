import React, { useEffect, useState, useCallback } from "react";
import Sqldb from "./sqldb";
import Table from "./resultTable";
import HintSection from "./hintSection";
import SaveProgress from "../saveProgress";

const SqlExecuter = ({ exercise, toExecute, setToExecute, editorRef }) => {
  const [dbResults, setdbResults] = useState([null, null]);
  const [queryResult, setQueryResult] = useState("");
  const [error, setError] = useState(null);

  const updateDbResults = (n, result) => {
    setdbResults((prevResults) => {
      const updatedResults = [...prevResults];
      updatedResults[n] = result;
      return updatedResults;
    });
  };

  // Wrap the 'checkQueries' function in useCallback to memoize it
  const checkQueries = useCallback((results) => {
    if (results[0] != null && results[1] != null) {
      JSON.stringify(results[0]).toUpperCase() === JSON.stringify(results[1]).toUpperCase()
        ? (setQueryResult("Resultado Correcto"), setError(null))
        : (setError("Incorrecto"), setQueryResult("Resultado Incorrecto"));
    }
    setToExecute(false);
  }, [setToExecute]);

  const handleError = (error) => {
    setError(error);
  };

  useEffect(() => {
    checkQueries(dbResults);
  }, [dbResults, checkQueries]);

  return (
    <div>
      {exercise.exercise_type === 2 ? (
        <Sqldb
          id={exercise.id}
          queries={[exercise.base_query, exercise.assert_query]}
          n={0}
          toExecute={toExecute}
          executeQuery={exercise.modifiers}
          setdbResults={(result) => updateDbResults(0, result)}
          onError={handleError}
        />
      ) : (
        <Sqldb
          id={exercise.id}
          queries={[exercise.base_query]}
          n={0}
          toExecute={toExecute}
          executeQuery={exercise.assert_query}
          setdbResults={(result) => updateDbResults(0, result)}
          onError={handleError}
        />
      )}
      <Sqldb
        id={exercise.id}
        queries={[exercise.base_query]}
        n={1}
        toExecute={toExecute}
        executeQuery={editorRef.current}
        modifier={exercise.modifiers !== '' ? exercise.modifiers : ''}
        setdbResults={(result) => updateDbResults(1, result)}
        onError={handleError}
      />

      {queryResult &&
        <h3>{queryResult}</h3>}

      {queryResult == 'Resultado Correcto' ? <SaveProgress exerciseId={exercise.id} /> : ''}

      {error !== null &&
        <p className="text-center mt-4">{error.message || error}</p>
      }

      <div className={"tablesContainer"}>

        {(dbResults[1] != null && dbResults[1] != '') &&
          <Table dbResults={dbResults[1]} nombreTabla={'Tu resultado'} />
        }

        {(dbResults[0] != null && dbResults[0] != '') &&
          <Table dbResults={dbResults[0]} nombreTabla={'Resultado esperado'} />
        }

      </div>

      {error !== null &&
        <HintSection id={exercise.id} query={editorRef.current.getValue()} queryError={error} result={JSON.stringify(dbResults[1])} />
      }
    </div>


  );
};

export default SqlExecuter;

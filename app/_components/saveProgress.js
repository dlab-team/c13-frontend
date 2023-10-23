import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CheckCertificate from "./checkCertificate";

async function postData(url) {
  const jwtToken = Cookies.get("JWT-cookie");
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }
    });

    const responseData = await response.json(); // Optional: Parse the response data if necessary
    console.log(responseData); // Print or handle the response data
  } catch (error) {
    console.error('Error:', error); // Handle any errors that occur during the request
  }
}

const SaveProgress = ({ exerciseId }) => {
  const [progressSaved, setProgressSaved] = useState(false);

  useEffect(() => {
    const saveExerciseProgress = async () => {
      await postData(`${process.env.API_BASE_URL}/exercises/${exerciseId}/user_exercises`);
      setProgressSaved(true); // Update state when progress is saved
    };

    saveExerciseProgress();
  }, [exerciseId]); // The empty dependency array [] ensures the effect runs only once when the component mounts

  return <>
      {/* {progressSaved && <CheckCertificate />} */}
  </>;
};

export default SaveProgress;
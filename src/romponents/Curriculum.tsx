import React, { useEffect, useState } from "react";
import axios from "../config/axios.config";
import Header from "./Header";
import Chapter from "./Chapter";


function Curriculum(props: any) {
  const [xhapters, setChapters] = useState([[]]);

  const id: number = props.match.params.id;
  let percentageCompleted: number;

  let token: string = localStorage.getItem("Token") || "";

  const fetchDetails = async () => {
    if (token !== "") {

      const res = await axios.get(`/api/curriculums/${id}/chapter`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      let allSubTasks = data.data.map((item: any) => {
        const task = {
          id: item.id,
          text: item.name,
          slug: item.slug,
        };
        return task;
      });
      setChapters(allSubTasks);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  if (token == '') {
    return <Redirect to={'/login'} />;
  }
  return (
    <>
      <Header />
      {xhapters.map((task: any, index) => {
        return (
          <Chapter
            key={index}
            task={task}
            percentageCompleted={percentageCompleted}
            updateAllTasks={() => fetchDetails()}
          />
        );
      })}
    </>
  );
}

export default Curriculum;

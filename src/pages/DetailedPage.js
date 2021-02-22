import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const axios = require("axios");

export default function DetailedPage() {
  const [articlesData, set_articlesData] = useState([]);

  const route_parameters = useParams();
  const id = route_parameters.id;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching Data!");
      const res = await axios.get("http://localhost:4000/");
      set_articlesData(res.data);
      console.log("Done!");
    };
    fetchData();
  }, []);
  //   const [articlesData, set_articlesData] = useState([
  //     {
  //       id: 1,
  //       img:
  //         "https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //       title: "Journaling and Mindfulness",
  //       writer: "Joshua Ginter",
  //       date: "2017-11-8",
  //       likes: 0,
  //       content:
  //         "In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons. In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons.In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons.In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons.In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons.In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons.",
  //       comments: ["very good article", "I learned", "hello world"],
  //     },
  //     {
  //       id: 2,
  //       img:
  //         "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //       title: "The Speed of Innovation",
  //       writer: "Bhavini Soneji",
  //       date: "2020-11-25",
  //       likes: 0,
  //       content:
  //         "Here are various factors that should be considered in determining how to address these — e.g. size of the company, phase of the company (growth phase or trying to find product market fit, etc.), maturity of the technology team, and tooling. There is no right or wrong answer, but ultimately, the largest determinant of success is ”speed of innovation.",
  //       comments: [],
  //     },
  //     {
  //       id: 3,
  //       img:
  //         "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //       title: "Rewriting in the time of COVID-19",
  //       writer: "Monica Grandy",
  //       date: "2020-10-15",
  //       likes: 0,
  //       content:
  //         "In what feels like a thousand years ago (although, in fact, it was October 2019), Headspace made a commitment to expand its offering beyond meditation. The preliminary prototype was sleek, inviting, feature-rich, and very, very different from what Headspace looked like at the time — especially in terms of technology. As a matter of fact, we were basically looking at a completely different application! The prospect of building out this new interface and feature set in less than a year was daunting to all of the engineering teams but for us droids, it seemed like a near impossible task. Why? Because our existing codebase was, to put it bluntly, a hot mess.",
  //       comments: [],
  //     },
  //   ]);

  const article = articlesData.filter((article) => {
    if (article.id == id) {
      return article;
    }
  });
  console.log(article[0]);

  return (
    <div>
      {article[0] != undefined && (
        <div>
          <h2>{article[0].title}</h2>
          <img src={article[0].img} style={{ width: 500 }} />
          <p>
            Author: {article[0].writer} Date: {article[0].date}
          </p>
          <p>
            Likes: {article[0].likes} Comments: {article[0].comments.length}
          </p>
          <p>{article[0].content}</p>
          <p>Comments from readers: </p>
          <ul className="list-group">
            {article[0].comments.map((comment, index) => (
              <li className="list-group-item" key={index}>
                {comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import AddContentForm from "../components/AddContentForm";
import Likes from "../components/Likes";
import Comments from "../components/Comments";

const axios = require("axios");

export default function FeedPage() {
  const [articlesData, set_articlesData] = useState([]);
  // {
  //   id: 1,
  //   img:
  //     "https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   title: "Journaling and Mindfulness",
  //   writer: "Joshua Ginter",
  //   date: "2017-11-8",
  //   likes: 0,
  //   content:
  //     "In its thinnest form, mindfulness can be described as being aware of something. The sky is blue: I’m mindful of the color of the sky. The air is cool: I’m mindful of the changing seasons.",
  //   comments: ["very good article", "I learned", "hello world"],
  // },
  // {
  //   id: 2,
  //   img:
  //     "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   title: "The Speed of Innovation",
  //   writer: "Bhavini Soneji",
  //   date: "2020-11-25",
  //   likes: 0,
  //   content:
  //     "Here are various factors that should be considered in determining how to address these — e.g. size of the company, phase of the company (growth phase or trying to find product market fit, etc.), maturity of the technology team, and tooling. There is no right or wrong answer, but ultimately, the largest determinant of success is ”speed of innovation.",
  //   comments: [],
  // },
  // {
  //   id: 3,
  //   img:
  //     "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   title: "Rewriting in the time of COVID-19",
  //   writer: "Monica Grandy",
  //   date: "2020-10-15",
  //   likes: 0,
  //   content:
  //     "In what feels like a thousand years ago (although, in fact, it was October 2019), Headspace made a commitment to expand its offering beyond meditation. The preliminary prototype was sleek, inviting, feature-rich, and very, very different from what Headspace looked like at the time — especially in terms of technology. As a matter of fact, we were basically looking at a completely different application! The prospect of building out this new interface and feature set in less than a year was daunting to all of the engineering teams but for us droids, it seemed like a near impossible task. Why? Because our existing codebase was, to put it bluntly, a hot mess.",
  //   comments: [],
  // },

  const [sort_by, set_sort_by] = useState("numberOfLikes");

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching Data!");
      const res = await axios.get("http://localhost:4000/");
      set_articlesData(res.data);
      console.log("Done!");
    };
    fetchData();
  }, []);

  console.log(articlesData);

  const incrementLikes = (id) => {
    // console.log("incrementing likes!");
    const newArticleDataWithLikes = articlesData.map((article) => {
      if (id == article.id) {
        return {
          ...article,
          likes: article.likes + 1,
        };
      } else {
        return article;
      }
    });
    // console.log(newArticleDataWithLikes);
    set_articlesData(newArticleDataWithLikes);
  };

  //   console.log(articlesData[0].comments.length);

  const submitComment = (comment, id) => {
    const commentAddedData = articlesData.map((article) => {
      if (id == article.id) {
        return {
          ...article,
          comments: [...article.comments, comment],
        };
      } else {
        return article;
      }
    });
    set_articlesData(commentAddedData);
    // console.log(comment, id);
  };

  function compareLikes(article_a, article_b) {
    return article_b.likes - article_a.likes;
  }

  function compareComments(article_a, article_b) {
    return article_b.comments.length - article_a.comments.length;
  }

  function compareDates(article_a, article_b) {
    return new Date(article_b.date) - new Date(article_a.date);
  }

  const articles_sorted =
    sort_by == "numberOfLikes"
      ? [...articlesData].sort(compareLikes)
      : sort_by == "numberOfComments"
      ? [...articlesData].sort(compareComments)
      : [...articlesData].sort(compareDates);

  const addContent = (title, writer, content, file) => {
    const now = new Date();
    const timeStamp = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}`;
    // console.log(timeStamp);
    const addedContent = [
      ...articlesData,
      {
        id: articlesData.length + 1,
        img: file,
        title: title,
        writer: writer,
        date: timeStamp,
        likes: 0,
        content: content,
        comments: [],
      },
    ];
    set_articlesData(addedContent);
  };

  return (
    <div>
      <AddContentForm addContent={addContent} />
      <p>Scroll down to see an article feeds! </p>
      <div>
        Sort by:{" "}
        <select
          onChange={(event) => set_sort_by(event.target.value)}
          value={sort_by}
          className="mb-5"
        >
          <option value="numberOfLikes">Number of likes</option>
          <option value="numberOfCommnets">Number of comments</option>
          <option value="date">Date (Most recent)</option>
        </select>
      </div>
      {articles_sorted.map((article) => {
        return (
          <div key={article.id}>
            <ArticleCard
              articleId={article.id}
              img={article.img}
              title={article.title}
              writer={article.writer}
              date={article.date}
              likes={article.likes}
              content={article.content}
              commentsNumber={article.comments.length}
            />
            <Likes articleId={article.id} incrementLikes={incrementLikes} />
            <Comments articleId={article.id} submitComment={submitComment} />
          </div>
        );
      })}
    </div>
  );
}

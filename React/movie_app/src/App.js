import React from 'react';
import PropTypes from "prop-types";

const frontPath = "https://movie.naver.com/movie/bi/mi/basic.nhn?code=";
const movieList = [
  {
    id: 1,
    name: "82년생 김지영",
    path: "179482",
    rating: 1
  },
  {
    id: 2,
    name: "터미네이터: 다크 페이트",
    path: "167605",
    rating: 2
  },
  {
    id: 3,
    name: "날씨의 아이",
    path: "181114",
    rating: 3
  },
  {
    id: 4,
    name: "조커",
    path: "167613",
    rating: 4
  },
  {
    id: 5,
    name: "말레피센트 2",
    path: "167635",
    rating: 5
  }
];

function Movie({ name, path, rating }) {
  return (
    <div>
      <h2><a href={path}>{name}</a></h2>
      <h4>{rating}</h4>
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function renderMovie(movies) {
  console.log(movies);
  return <Movie key={movies.id} name={movies.name} path={frontPath + movies.path} rating={movies.rating} />;
}

function App() {
  return <div>{movieList.map(renderMovie)}</div>
}

export default App;

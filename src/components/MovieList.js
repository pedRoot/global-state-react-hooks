import { useEffect } from "react";

const MovieList = () => {

  const user = {
    isLogin: false
  };

  useEffect(() => {

    const interval = setInterval(() =>{
      console.log('logueate ...');
    }, 1000);
    
    if (user.isLogin) {
      return clearInterval(interval);
    }

    return () => clearInterval(interval);

  });

  console.log('movie list');

  return (
    <div className="container">
      <div className="row">
      List Products
        {/* {
          user.isLogin && movies.map(movie => (
            <div className="col-md-4" key={movie.id}>
              <Movie movie={movie} />
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default MovieList

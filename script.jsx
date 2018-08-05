








class Main extends React.Component {
    render() {
      return(
        <div id="home">
          <h1>TV Maze</h1>
          <br />
           <Search />
        </div>
      )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
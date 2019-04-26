import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_Main.scss";

export default class Main extends Component {
  state = {
    monsters: []
  };
  componentDidMount() {
    const url = "http://localhost:8080/api/v1/monsters";
    fetch(url)
      .then(respond => respond.json())
      .then(data => {
        this.setState({ monsters: data.data });
      });
  }

  render() {
    const monsters = this.state.monsters.length ? (
      this.state.monsters.map(monster => {
        return (
          <div
            className="card text-center m-2"
            style={{ width: "15rem" }}
            key={monster.name}
          >
            <img
              className="card-img-top"
              src={monster.images.thumb}
              alt="Card cap"
            />
            <div className="card-body">
              <Link to={`/${monster.slug}`}>
                <span className="btn btn-warning text-info">
                  {monster.name}
                </span>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Waiting for data</div>
    );
    return (
      <>
        <div class="bg-info background" />
        <section className="container-fluid home" style={{ height: "100%" }}>
          <h1 className="text-center text-warning display-4 mb-3">Monsters</h1>
          <div className="d-flex flex-wrap main">{monsters}</div>
        </section>
      </>
    );
  }
}

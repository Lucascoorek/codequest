import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_Monster.scss";

export default class Monster extends Component {
  state = {
    monster: null
  };
  componentDidMount() {
    fetch(
      `http://localhost:8080/api/v1/monster/${
        this.props.match.params.monsterName
      }`
    )
      .then(data => data.json())
      .then(monster => {
        this.setState({ monster: monster.data });
      });
  }
  render() {
    const monster = this.state.monster ? (
      <article
        className="card text-center m-3"
        style={{ maxWidth: "600px" }}
        key={this.state.monster.name}
      >
        <img
          className="card-img-top"
          src={this.state.monster.images.big}
          alt="Card cap"
        />
        <div className="card-body">
          <h1 className="card-title mb-3">{this.state.monster.name}</h1>
          <p className="my-3 lead">{this.state.monster.description}</p>
          <div className="progress m-3">
            <div
              className="progress-bar text-dark bg-info"
              role="progressbar"
              style={{
                width: `${this.state.monster.statistics.danger * 100}%`
              }}
              aria-valuenow={this.state.monster.statistics.danger * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Danger
            </div>
          </div>
          <div className="progress m-3" style={{ color: "black" }}>
            <div
              className="progress-bar text-dark bg-info"
              role="progressbar"
              style={{
                width: `${this.state.monster.statistics.frequency * 100}%`
              }}
              aria-valuenow={this.state.monster.statistics.frequency * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Frequency
            </div>
          </div>
          <div className="progress m-3">
            <div
              className="progress-bar text-dark bg-info"
              role="progressbar"
              style={{ width: `${this.state.monster.statistics.power * 100}%` }}
              aria-valuenow={this.state.monster.statistics.power * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Power
            </div>
          </div>
          <Link to="/">
            <span className="btn btn-warning text-info">Back</span>
          </Link>
        </div>
      </article>
    ) : (
      <div className="center">Waiting for data</div>
    );
    return (
      <section className="container-fluid d-flex justify-content-center">
        <div class="bg-info background" />
        {monster}
      </section>
    );
  }
}

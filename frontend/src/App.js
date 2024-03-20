import './App.css';
import React from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        complete: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { intitule: "", description: "", complete: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderList() {
      const liste = this.state.todoList;
        return liste.map((item) => (
        <tr key={item.id}>
            <th className="col-7">
                <details>
                    <summary className="intituleTache">{item.intitule}</summary>
                    <p className="description"><u>Description :</u> <br/>{item.description}</p>
                </details>
            </th>

            {item.complete === true ? (
                <th className="col" style={{background:"lime"}}></th>
            ) : (
                <th style={{background:"crimson"}}></th>
            )}
            <th>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(item)}
                >
                    Supprimer
                </button>
                <i
                    className="bi bi-pencil-fill mx-2 cursor-pointer"
                    onClick={() => this.editItem(item)}
                />
            </th>
        </tr>
    ));
  }

    render() {
        return (
            <>
                <div className="container-fluid center">
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={this.createItem}
                    >
                        Nouvelle tâche
                    </button>
                    <div className="table-responsive center-table">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th><h4>Intitulé</h4></th>
                                <th><h4>Fait</h4></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderList()}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.state.modal ? (
                    <Modal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </>
        );
    }
}

export default App;


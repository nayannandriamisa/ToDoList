import './App.css';
import React from "react";
import axios from "axios";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete : false,
      taskList : [],
      modal : false,
      activeTask: {
        intitule: "",
        description: "",
        complete: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    axios.get("/api")
        .then((response) => this.setState({
          taskList: response.data
        }))
        .catch((error) => console.log(error));
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  addTask(tache) {
      this.toggle();
      if (tache.id) {
          axios.put(`/api/${tache.id}/`, tache)
              .then((response) => this.refreshList());
          return;
      }
      axios.post("/api", tache)
          .then((response) => this.refreshList());
  }

  deleteTask(tache) {
      axios.delete(`/api/${tache.id}/`)
          .then((response) => this.refreshList());
  }

  createTask (){
    const tache = { title: "", description: "", completed: false };

    this.setState({ activeItem: tache, modal: !this.state.modal });
  };

  editTask (tache) {
    this.setState({ activeItem: tache, modal: !this.state.modal });
  };


  renderList() {
    return this.state.taskList.map((tache) => (
        <tr key={tache.id}>
            <th className="col-7">
                <details>
                    <summary className="intituleTache">{tache.intitule}</summary>
                    <p className="description"><u>Description :</u> <br/>{tache.description}</p>
                </details>
            </th>
            <th>
            {tache.complete === true ? (
                <i className="bi bi-check-square cursor-pointer"/>
            ) : (
                <i className="bi bi-square cursor-pointer"/>
            )}
            </th>
            <th>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => this.deleteTask(tache)}>
                    Supprimer
                </button>
                <i
                    className="bi bi-pencil-fill mx-2 cursor-pointer"
                    onClick={() => this.editTask(tache)}
                />
            </th>
        </tr>
    ))
  }

    render() {
        return (
            <>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={this.addTask}
                >
                    Nouvelle tâche
                </button>
                <br/>
                <div className="container-fluid">
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
            </>
        );
    }
}

export default App;



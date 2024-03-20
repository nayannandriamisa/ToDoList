import React from "react";
import {Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Input} from "reactstrap";

export default class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange(event) {
        let {name, value} = event.target;

        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    }

    render() {
        const {toggle, onSave} = this.props;

        return(
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Nouvelle tâche
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for={"intitule"}>Intitulé :</Label>
                            <Input
                                type="text"
                                id="intitule"
                                name="intitule"
                                value={this.state.activeItem.intitule}
                                onChange={this.handleChange}
                                placeholder="Saisissez l'intitulé de la tâche"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for={"description"}>Description :</Label>
                            <Input
                                type="text"
                                id="description"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Saisissez une description de la tâche"
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                  type="checkbox"
                                  name="complete"
                                  checked={this.state.activeItem.complete}
                                  onChange={this.handleChange}
                                />
                                Fait
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => onSave(this.state.activeItem)}
                    >
                    Enregistrer
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
import React from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Spacer,
} from "@nextui-org/react";

interface Props {
  bindings: {
    open: boolean;
    onClose: () => void;
  };
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactModal({ bindings, setVisible }: Props) {
  return (
    <Modal
      scroll
      width="600px"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...bindings}
    >
      <Modal.Header>
        <Text id="modal-title" size={25}>
          Contactanos
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          bordered
          placeholder="Tu nombre"
          type={"text"}
          css={{ backgroundColor: "$gray100" }}
        ></Input>
        <Spacer y={-0.4} />
        <Input
          bordered
          placeholder="Email"
          type={"text"}
          color={"primary"}
          css={{ backgroundColor: "$gray100" }}
        ></Input>
        <Spacer y={-0.4} />
        <Input
          bordered
          placeholder="Cuentanos sobre tu proyecto"
          type={"text"}
          css={{ backgroundColor: "$gray100" }}
        ></Input>
        <Spacer y={-0.4} />
        <Input
          bordered
          placeholder="Presupuesto del proyecto (USD)"
          type={"number"}
          css={{ backgroundColor: "$gray100" }}
        ></Input>
        <Spacer y={0.5} />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setVisible(false)}>
          Cerrar
        </Button>
        <Button auto onClick={() => setVisible(false)}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

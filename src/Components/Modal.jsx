import React from "react";

import { useSelector } from "react-redux";
import { selectTaskData } from "../redux/selector";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modal = () => {
  let { isEdit } = useSelector(selectTaskData);
  return <></>;
};

export default Modal;

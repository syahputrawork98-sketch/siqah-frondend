import { useState } from "react";

export function useCrudModalState() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  const openView = (item) => {
    setSelectedItem(item);
    setModalView(true);
  };

  const openEdit = (item) => {
    setSelectedItem(item);
    setModalEdit(true);
  };

  const openDelete = (item) => {
    setSelectedItem(item);
    setModalDelete(true);
  };

  return {
    selectedItem,
    modalView,
    modalEdit,
    modalDelete,
    modalTambah,
    setModalView,
    setModalEdit,
    setModalDelete,
    setModalTambah,
    openView,
    openEdit,
    openDelete,
  };
}

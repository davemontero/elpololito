import React, { useState, useEffect } from "react";
import NavbarApp from "../components/NavbarApp";





const AddPetition = () => {
  const [id, setId] = useState();
  const [form, setForm] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
        method: 'GET',
        headers: {

            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    })
        .then(response => response.json())
        .then(data => setId(data.id[0]));

},[]);

  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      user_id:id
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/create-publication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
     
  }
  return (
    <>
      <NavbarApp />
      <div className="container">
        {console.log('id', id)}
        <form>
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Titulo de su peticion
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={HandleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputBody" className="form-label">
              Descripcion de la peticion
            </label>
            <input
              type="text"
              className="form-control"
              id="body"
              name="body"
              onChange={HandleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputBody" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={HandleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPetition;

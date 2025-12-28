import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadiingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  console.log(notes);

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch, successCreate, successDelete, successUpdate]);

  return (
    <MainScreen title={`Welcome Back ${userInfo.name}`}>
      <Link to="/createnote">
        <Button
          style={{ marginleft: 10, marginBottom: 5 }}
          size="lg"
          variant="outline-primary"
        >
          Create New Note
        </Button>
      </Link>
      {errorDelete && (
        <ErrorMessage variant="warning"> {errorDelete}</ErrorMessage>
      )}
      {loadiingDelete && <Loading />}
      {error && <ErrorMessage variant="warning"> {error}</ErrorMessage>}
      {loading && <Loading />}
      {[...(notes || [])]
        .reverse()
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "white",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
                <div onClick={(e) => e.stopPropagation()}>
                  <Link to={`/note/${note._id}`}>
                    <Button variant="outline-primary" className="mx-2">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>{" "}
            </Card>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyNotes;

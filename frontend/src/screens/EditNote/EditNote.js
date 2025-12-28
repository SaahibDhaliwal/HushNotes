import React, { useEffect, useState, useRef } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateNoteAction } from "../../actions/notesActions";
import { NOTES_UPDATE_RESET } from "../../constants/notesConstants";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const hasSubmitted = useRef(false);

  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { notes } = noteList;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error, success } = noteUpdate;

  useEffect(() => {
    dispatch({ type: NOTES_UPDATE_RESET });
    const note = notes?.find((n) => n._id === id);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [id, notes, dispatch]);

  useEffect(() => {
    if (success && hasSubmitted.current) {
      navigate("/mynotes");
    }
  }, [success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    hasSubmitted.current = true;
    dispatch(updateNoteAction(id, title, content));
  };

  return (
    <MainScreen title="Edit Note">
      <Card>
        <Card.Header>Edit Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content" className="pb-2">
              <Form.Label className="pt-2">Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            {loading && <Loading size={50} />}
            <Button className="mt-3" type="submit" variant="outline-primary">
              Update Note
            </Button>
            <Button
              className="mx-2 mt-3"
              onClick={() => navigate("/mynotes")}
              variant="outline-danger"
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainScreen>
  );
}

export default EditNote;

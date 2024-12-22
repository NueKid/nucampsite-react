import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../utils/validateCommentForm';

const CommentForm = ({ campsiteId }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    
    const handleSubmit = (values) => {
        const comment = {
            id: values.id,
            campsiteId: parseInt(campsiteId),
            rating: parseInt(values.rating),
            text: values.commentText,
            author: values.author
        };

        console.log(comment);
        setModalOpen(false);
    }

    return (
        <>
        <Button outline={true} onClick={() => setModalOpen(true)}>
            <i className='fa fa-pencil fa-lg' /> Add Comment
        </Button>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={() => setModalOpen(false)}>
                Addd Comment
            </ModalHeader>
            <ModalBody>
                <Formik initialValues={{
                    rating: undefined,
                    author: '',
                    commentText: ''
                }}
                onSubmit={handleSubmit}
                validate={validateCommentForm}
                >
                    <Form>
                        <FormGroup>
                            <label htmlFor='rating'>Rating</label>
                            <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                            </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='author'>Author</label>
                            <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                            />
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='commentText'>Comment</label>
                            <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                            />
                        </FormGroup>
                        <Button type='submit' color='primary'>
                                Submit
                        </Button>
                    </Form>
                </Formik>
            </ModalBody>
        </Modal>
        </>
    )
}

export default CommentForm;
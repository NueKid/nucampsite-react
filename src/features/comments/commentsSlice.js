import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsbyCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};

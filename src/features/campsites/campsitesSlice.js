import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsitesDirectoryPage from '../../pages/CampsitesDirectoryPage';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]; 
// }

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
}
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: sessionStorage.getItem('user') === null ? '' : JSON.parse(sessionStorage.getItem('user')),
  experience: sessionStorage.getItem('experience') === null ? '' : JSON.parse(sessionStorage.getItem('experience')),
  projects: sessionStorage.getItem('projects') === null ? '' : JSON.parse(sessionStorage.getItem('projects')),
  skills: sessionStorage.getItem('skills') === null ? '' : JSON.parse(sessionStorage.getItem('skills')),
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    updateExperience: (state, { payload }) => {
      state.experience = payload;
      sessionStorage.setItem('experience', JSON.stringify(state.experience));
    },
    updateSkills: (state, { payload }) => {
      state.experience = payload;
      sessionStorage.setItem('skills', JSON.stringify(state.skills));
    },
    updateProjects: (state, { payload }) => {
      state.experience = payload;
      sessionStorage.setItem('projects', JSON.stringify(state.projects));
    },
    updateUser: (state, { payload }) => {
      state.user = payload;
      sessionStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { updateUser, updateExperience, updateProjects, updateSkills } = slice.actions;

export default slice.reducer;

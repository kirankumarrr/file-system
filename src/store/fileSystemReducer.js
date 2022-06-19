import dummyFileSystem from '../utils/dummyFileSystem';

import { ADD_ENTRY, DELETE_ENTRY, FOLDER } from '../utils/constants';
import { DeleteEntry, AddEntry } from '../utils/fileSystem';

// const fileSystem = (data = dummyFileSystem(), action) => {
const fileSystem = (data = {}, action) => {
  switch (action.type) {
    case ADD_ENTRY: {
      const newEntry = action.payload;
      return AddEntry(data, newEntry);
    }

    case DELETE_ENTRY: {
      return DeleteEntry(data, action.payload);
    }

    default:
      return data;
  }
};


export default fileSystem
import { TSavedFile } from '../types/saved-file-type';
import { APIRoute } from '../const';
import { apiFiles } from '../store';

let serverResponse: TSavedFile;
export const saveFile = async (formData: FormData) => {
  await apiFiles.post<TSavedFile>(APIRoute.SaveFile, formData).then((response) => {
    serverResponse = response.data;
  });

  return serverResponse;
};

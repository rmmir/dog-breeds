import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { DogBreedCreate, DogBreedData } from "../models/DogBreedModel";

const API_URL = 'http://127.0.0.1:8000';
const QUERY_KEY = ['DogBreeds'];

const fetchDogBreeds = async (): Promise<DogBreedData> => {
    const { data } = await axios.get(`${API_URL}/dog-breeds`);
    return data;
};

const createDogBreed = async (breedData: DogBreedCreate): Promise<DogBreedCreate> => {
    const { data } = await axios.post(`${API_URL}/dog-breeds`, breedData);
    return data;
  };
  
export const useGetDogBreeds = () => {
    return useQuery<DogBreedData, Error>(QUERY_KEY, () => fetchDogBreeds());
};

export const useCreateDogBreed = () => {
    return useMutation<DogBreedCreate, Error, DogBreedCreate>((newBreed) => createDogBreed(newBreed));
};
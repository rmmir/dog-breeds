import { DogBreed } from '../models/DogBreedModel';
import DogBreedCard from '../components/DogBreedCard';
import Header from '../components/Header';
import LoadingSpin from '../components/LoadingSpin';
import ErrorDetails from '../components/ErrorDetails';
import { useGetDogBreeds } from '../api/useDogBreedsApi';

const DogBreedsPage: React.FC = () => {
    const { isLoading, error, data } = useGetDogBreeds();

    if (isLoading) return <LoadingSpin />

    if (!data || error) 
        return <ErrorDetails details={`Error loading the dog breeds data: ${error}`} />

    return (
        <div className='bg-gray-100 p-5'>
            <Header breedCount={data.dogBreeds.length} />
            <div className='flex flex-wrap gap-3'>
                {data.dogBreeds?.map((breed: DogBreed) => (
                    <DogBreedCard key={breed.id} breed={breed} />
                ))}
            </div>
        </div>
    );
};

export default DogBreedsPage;